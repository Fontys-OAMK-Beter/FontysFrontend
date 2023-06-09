import React from 'react';
import CreateEvent from '../components/CreateEvent';

const CreateEventPage = ({ groupId }) => {
  return (
    <div>
      <h1>Create Event Page</h1>
      <CreateEvent groupId={groupId} />
    </div>
  );
};

export default CreateEventPage;
