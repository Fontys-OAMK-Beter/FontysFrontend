import React from 'react';

class CreateGroupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: ''
        };
    }

    handleGroupNameChange = (event) => {
        this.setState({ groupName: event.target.value });
    }

    handleCreateGroup = () => {
        // Call the createGroup method in the C# class
        // You can replace 'YOUR_API_ENDPOINT' with the actual endpoint of your C# code
        fetch('YOUR_API_ENDPOINT/creategroup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ groupName: this.state.groupName })
        })
            .then(response => {
                // Handle the response from the server
                if (response.ok) {
                    // Group created successfully
                    console.log('Group created!');
                    // Reset the input field
                    this.setState({ groupName: '' });
                } else {
                    // Group creation failed
                    console.error('Failed to create group.');
                }
            })
            .catch(error => {
                console.error('Error creating group:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Create Group</h1>
                <input type="text" value={this.state.groupName} onChange={this.handleGroupNameChange} />
                <button onClick={this.handleCreateGroup}>Create Group</button>
            </div>
        );
    }
}

export default CreateGroupPage;