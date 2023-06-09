import React, { useState, useEffect } from "react";
import GroupThumb from '../components/GroupThumb';
import '../styles/Groups.scss';
import { useParams } from "react-router-dom";

const Groups = () => {
    const [groupsList, setGroupsList] = useState([]);
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await fetch('https://localhost:7149/api/Party/4/Users');
                const usersData = await usersResponse.json();

                setGroupsList(prevList => [
                    ...prevList,
                    ...prevList,
                    ...prevList,
                    {
                        id: 0,
                        name: 'The betere group',
                        pictureUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                        members: usersData,
                        upcomingEvents: [
                            {
                                id: 0,
                                title: 'Spy Kids',
                                date: '19/08/2023'
                            },
                            {
                                id: 1,
                                title: 'Married... with Children',
                                date: '07/20/2023'
                            }
                        ]
                    }
                ]);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="GroupsList">
            <a href="/groups/create">Create a group</a>
            <h2>Your groups</h2>
            {groupsList.map(group => (
                <GroupThumb group={group} key={group.id} />
            ))}
        </div>
    );
};

export default Groups;
