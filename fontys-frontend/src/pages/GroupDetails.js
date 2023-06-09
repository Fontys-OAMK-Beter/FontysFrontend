import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../styles/groupDetails.scss';
import axios from "axios";

const GroupDetails = () => {
  const { groupId } = useParams();
  const [group = {
            id: null,
            name: '',
            pictureUrl: '',
            members: [],
            upcomingEvents: []
  }, setGroup] = useState();

  useEffect(() => {
    // Fetch the group data from the API using the `groupId`
    const fetchGroupData = async () => {
      try {
        const response = await fetch(`https://localhost:7149/api/Party/${groupId}?PartyId=${groupId}`);
        const data = await response.json();

        setGroup(prevGroup => ({
            ...prevGroup,
            id: data.id,
            name: data.pictureURL,
            pictureUrl: data.title,
        }));
        // Set the retrieved group data to the `group` state variable
        //setGroup(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    const fetchGroupEvents = () => {
        axios.get(`https://localhost:7149/api/Event/${groupId}`)
        .then(response => {
            const upcomingEvents = response.data;
            setGroup(prevState => ({
                    ...prevState,
                    upcomingEvents: upcomingEvents
            }));
        })
        //console.log(group)
        .catch(error => {
            console.error("Error fetching upcoming events:", error);
        });
    }

    fetchGroupData();
    fetchGroupEvents();
  }, [groupId]);

//   useEffect(() => {
//     // Log the updated value of `group`
//     console.log(group);
//   }, [group]);

  if (!group) {
    return <div>Loading...</div>;
  }

      const handleDeleteEvent = (eventId) => {
        // Show the confirmation dialog
        if (window.confirm('Are you sure you want to delete this event?')) {
          // Make an API call to delete the event
          axios
            .delete(`/api/event/${eventId}`)
            .then((response) => {
              console.log('Event deleted:', response.data);
              // Update the state to remove the deleted event
              this.setState((prevState) => {
                const updatedEvents = prevState.group.upcomingEvents.filter((event) => event.id !== eventId);
                return {
                  group: {
                    ...prevState.group,
                    upcomingEvents: updatedEvents,
                  },
                };
              });
            })
            .catch((error) => {
              console.error('Error deleting event:', error);
            });
        }
      };
      
    
      const handleUpdateEvent = (eventId) => {
        // Redirect or handle the update event logic as per your requirements
        console.log('Update event:', eventId);
      };

      
  const handleDeleteGroup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://localhost:7149/api/Party/${groupId}?PartyId=${groupId}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      console.log(data); // Optional: Handle the response data as needed
    } catch (error) {
      console.log('Error:', error);
    }
  };



  return (
    <div className="groupDetails">
      <div>
        <img src={group.pictureUrl} alt="Group" />
        <form className="groupDelete" onSubmit={handleDeleteGroup}>
          <button>Delete this group</button>
        </form>
      </div>
      <div>
        <Link to="/groups" className="backToGroups">&lt; Back to groups</Link>
        <h1>{group.name}</h1>
        {/* <ul className="groupMemberList">
          {group.members.map(member => (
            <li key={member.id}>
              <Link to={"users/" + member.id}>
                <img src={member.pictureUrl} alt={member.name} title={member.name} />
              </Link>
            </li>
          ))}
        </ul> */}
        <div className="createEventContainer">
          <Link to="/create-event" className="createEventButton">Create Event</Link>
        </div>
        <h4>Upcoming events:</h4>
        <div className="groupEventList">
          {group.upcomingEvents.map(event => (
            <Link to={"events/" + event.id} key={event.id}>
              <h5>{event.title}</h5>
              <span>{event.date}</span>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
              <button onClick={() => handleUpdateEvent(event.id)}>Update</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;