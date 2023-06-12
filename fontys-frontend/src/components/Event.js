import React, { Component } from 'react';
import axios from 'axios';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents() {
        // Extract the groupId from the props or state (depending on how you pass it)
        const { groupId } = this.props;

        axios.get(`/api/event/group/${groupId}`)
            .then(response => {
                this.setState({
                    events: response.data,
                    isLoading: false,
                    error: null
                });
            })
            .catch(error => {
                this.setState({
                    events: [],
                    isLoading: false,
                    error: 'Failed to fetch events.'
                });
                console.error(error);
            });
    }

    createEvent(eventData) {
        axios.post('/api/event', eventData)
            .then(response => {
                this.fetchEvents();
            })
            .catch(error => {
                console.error(error);
            });
    }

    updateEvent(eventId, eventData) {
        axios.put(`/api/event/${eventId}`, eventData)
            .then(response => {
                this.fetchEvents();
            })
            .catch(error => {
                console.error(error);
            });
    }

    deleteEvent(eventId) {
        axios.delete(`/api/event/${eventId}`)
            .then(response => {
                this.fetchEvents();
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const { events, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div>
                <h2>Events</h2>
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <span>Title: {event.title}</span>
                            <span>Start Time: {event.startTime}</span>
                            <span>Description: {event.description}</span>
                            <span>Picture URL: {event.pictureUrl}</span>
                            <button onClick={() => this.updateEvent(event.id, { title: 'Updated Title' })}>Update</button>
                            <button onClick={() => this.deleteEvent(event.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Event;
