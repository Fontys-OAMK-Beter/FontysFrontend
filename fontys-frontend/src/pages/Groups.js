import React, { useState, useEffect } from "react";
import GroupThumb from '../components/GroupThumb';
import '../styles/Groups.scss';
import { useParams } from "react-router-dom";

const Groups = () => {
    const [groupsList, setGroupsList] = useState([]);
    const { id } = useParams();

    const fetchParties = async () => {
        try {
            const response = await fetch('https://localhost:7149/api/user/4/parties');
            const parties = await response.json();
            return parties;
        } catch (error) {
            console.log('Error:', error);
            return [];
        }
    };

    const fetchUsersForGroup = async (groupId) => {
        try {
            const response = await fetch(`https://localhost:7149/api/party/${groupId}/users`);
            const users = await response.json();
            return users;
        } catch (error) {
            console.log('Error:', error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const parties = await fetchParties();
            console.log(parties);

            const groupsWithUsers = [];

            for (const group of parties) {
                const users = await fetchUsersForGroup(group.id);
                console.log(users);
                const groupWithUsers = {
                    ...group,
                    users
                };
                groupsWithUsers.push(groupWithUsers);
            }

            console.log(groupsWithUsers);
            setGroupsList(groupsWithUsers);
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="GroupsList">
                <a href="/groups/create">Create a group</a>
                <h2>Your groups</h2>
                {groupsList.map(group => {
                    return <GroupThumb group={group} key={group.id} />;
                }
                )}
            </div>
            {/* {groupsList.map((group) => (
                <div key={group.id}>
                    <h2>{group.title}</h2>
                    <ul>
                        {group.users.map((user) => (
                            <li key={user.id}>
                                <img src={user.pictureUrl} />
                                <span>{user.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))} */}
        </div>


    );
};

export default Groups;
