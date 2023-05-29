import React, { Component } from 'react';
import './GroupThumb.scss';

export default class GroupThumb extends Component {
    render() {
        const group = this.props.group;
        return (
            <div className="Groupthumb">
                <a href={"groups/"+group.id}><img src={group.pictureUrl} alt={group.name}></img></a>
                <div>
                    <h3><a href={"groups/"+group.id}>{group.name}</a></h3>
                    <ul>
                        {group.members.map(member => (
                        <li>
                            <a href={"users/"+member.id}>
                                <img src={member.pictureUrl} alt={member.name} title={member.name}></img>
                            </a>
                        </li>
                        ))}
                    </ul>

                    <h4>Upcoming events:</h4>
                    <div>
                        {group.upcomingEvents.map(event => (
                        <a href={"events/"+event.id}>
                            <h5>{event.title}</h5>
                            <span>{event.date}</span>
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}