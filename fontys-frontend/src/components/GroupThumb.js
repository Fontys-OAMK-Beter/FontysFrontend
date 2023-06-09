import React, { Component } from 'react';
import '../styles/GroupThumb.scss';

export default class GroupThumb extends Component {
    render() {
        const group = this.props.group;
        return (
            <div className="Groupthumb">
                <a href={"groups/" + group.id}><img src={group.pictureURL} alt={group.title}></img></a>
                <div>
                    <h3><a href={"groups/" + group.id}>{group.title}</a></h3>
                    <ul>
                        {group.users.map(users => (
                            <li>
                                <a href={"users/" + users.id}>
                                    <img src={users.pictureUrl} alt={users.name} title={users.name}></img>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* <h4>Upcoming events:</h4>
                    <div>
                        {group.upcomingEvents.map(event => (
                            <a href={"events/" + event.id}>
                                <h5>{event.title}</h5>
                                <span>{event.date}</span>
                            </a>
                        ))}
                    </div> */}
                </div>
            </div>
        )
    }
}