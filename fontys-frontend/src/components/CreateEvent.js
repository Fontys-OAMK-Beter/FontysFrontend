import React, { Component } from 'react';
import axios from 'axios';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            startTime: '',
            description: '',
            pictureUrl: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, startTime, description, pictureUrl } = this.state;

        // Create an object with the event data
        const eventData = {
            title: title,
            startTime: startTime,
            description: description,
            pictureUrl: pictureUrl
        };

        // Make a POST request to the API to create the event
        axios.post('/api/event', eventData)
            .then(response => {
                // Event created successfully
                console.log(response.data);
                // Reset the form fields
                this.setState({
                    title: '',
                    startTime: '',
                    description: '',
                    pictureUrl: ''
                });
            })
            .catch(error => {
                // Error occurred while creating the event
                console.error(error);
            });
    }

    render() {
        const { title, startTime, description, pictureUrl } = this.state;

        return (
            <div>
                <h2>Create Event</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={title} onChange={(event) => this.setState({ title: event.target.value })} />
                    </label>
                    <br />
                    <label>
                        Start Time:
                        <input type="datetime-local" value={startTime} onChange={(event) => this.setState({ startTime: event.target.value })} />
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea value={description} onChange={(event) => this.setState({ description: event.target.value })} />
                    </label>
                    <br />
                    <label>
                        Picture URL:
                        <input type="text" value={pictureUrl} onChange={(event) => this.setState({ pictureUrl: event.target.value })} />
                    </label>
                    <br />
                    <button type="submit">Create Event</button>
                </form>
            </div>
        );
    }
}

export default CreateEvent;