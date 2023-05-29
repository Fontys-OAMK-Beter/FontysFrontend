import React, { Component } from 'react';
import './GroupThumb.scss';

export default class GroupThumb extends Component {
    render() {
        const group = this.props.group;
        return (
            <div className="Groupthumb">
                <img></img>
                <div>
                    <h3>{group.name}</h3>
                    <ul>
                        {group.members.map(member => (
                        <li>
                            <a><img src={member.pictureUrl} alt={member.name}></img></a>
                        </li>
                        ))}
                    </ul>

                    <span>Upcoming events:</span>
                    <div>
                        {group.upcomingEvents.map(event => (
                        <a href="#">
                            <h4>{event.title}</h4>
                            <span>{event.date}</span>
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}