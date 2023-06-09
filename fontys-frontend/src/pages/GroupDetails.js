import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/groupDetails.scss';

const GroupDetails = (props) => {
    const { groupId } = useParams();
    const [group, setGroup] = useState(null);

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

    useEffect(() => {
        // Fetch the group data from the API using the `groupId`
        const fetchGroupData = async () => {
            try {
                const response = await fetch(`https://localhost:7149/api/Party/${groupId}?PartyId=${groupId}`);
                const data = await response.json();
                // Set the retrieved group data to the `group` state variable
                setGroup(data);
                console.log(group)
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchGroupData();
    }, [groupId]);

    useEffect(() => {
        // Log the updated value of `group`
        console.log(group);
    }, [group]);

    if (!group) {
        return <div>Loading...</div>;
    }

    return (
        <div className="groupDetails">
            <div>
                <img src={group.title} alt="Group" />
                <form className="groupDelete" onSubmit={handleDeleteGroup}>
                    <button>Delete this group</button>
                </form>
            </div>
            <div>
                <a href="/groups" className="backToGroups">&lt; Back to groups</a>
                <h1>{group.pictureURL}</h1>
                {/* <ul className="groupMemberList">
                    {group.members.map(member => (
                        <li key={member.id}>
                            <a href={"users/" + member.id}>
                                <img src={member.pictureUrl} alt={member.name} title={member.name}></img>
                            </a>
                        </li>
                    ))}
                </ul> */}
                <h4>Upcoming events:</h4>
                {/* <div className="groupEventList">
                    {group.upcomingEvents.map(event => (
                        <a href={"events/" + event.id} key={event.id}>
                            <h5>{event.title}</h5>
                            <span>{event.date}</span>
                        </a>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default GroupDetails;
