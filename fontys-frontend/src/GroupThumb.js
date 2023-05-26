import React, { Component } from 'react';
import './GroupThumb.scss';

class GroupThumb extends Component {
    render() {
        return (
            <div className="Groupthumb">
                <img></img>
                <div>
                    <h3>Group name</h3>
                    <ul>
                        <li>
                            <a><img></img></a>
                        </li>
                        <li>
                            <a><img></img></a>
                        </li>
                        <li>
                            <a><img></img></a>
                        </li>
                    </ul>

                    <span>Upcoming events:</span>
                    <div>
                        <a href="#">
                            <h4>Shrek the Third</h4>
                            <span>19/08/2023</span>
                        </a>
                        <a href="#">
                            <h4>Ratatouille</h4>
                            <span>06/07/2023</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupThumb