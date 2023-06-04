import React, { useState, useEffect, Grid } from "react";
import GroupThumb from '../components/GroupThumb';
import '../styles/Groups.scss'

export default class Groups extends React.Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        GroupsList : [{
            id: 0,
            name: 'The betere group',
            pictureUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            members: [
            {
                id: 0,
                name: 'Wouter',
                pictureUrl: 'https://varbai.com/wp-content/uploads/2019/02/thispersondoesnotexis.jpg'
            },
            {
                id: 1,
                name: 'Brian',
                pictureUrl: 'https://www.959jamz.com/wp-content/uploads/2021/04/this-person-does-not-exist.jpeg'
            },
            {
                id: 2,
                name: 'Ruben',
                pictureUrl: 'https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?width=640&crop=smart&auto=webp&s=4f2cf32ea788e3ecf10354c2bf2709c1f8ffef4e'
            },
            {
                id: 3,
                name: 'Tom',
                pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Rutte_2015_%281%29_%28cropped%29.jpg/800px-Mark_Rutte_2015_%281%29_%28cropped%29.jpg'
            },
            {
                id: 4,
                name: 'Mike',
                pictureUrl: 'https://www.bigw.com.au/medias/sys_master/images/images/h63/h0e/12097760198686.jpg'
            }
            ],
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
        }]
    }

    render() {
        const { GroupsList } = this.state;
        GroupsList.push(GroupsList[0]);
        GroupsList.push(GroupsList[0]);
        GroupsList.push(GroupsList[0]);

        return (
            <div className="GroupsList">
                <a href="/groups/create">Create a group</a>
                <h2>Your groups</h2>
                {GroupsList.map(Group =>
                    <GroupThumb group={Group} key={Group.id}></GroupThumb>
                )}
            </div>
        );
    }
}