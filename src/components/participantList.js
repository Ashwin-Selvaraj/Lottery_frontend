// ParticipantList.js
import React from 'react';

const ParticipantList = ({ participants }) => {
  return (
    <div className='ParticipantList'>
      <h3>Participants:</h3>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantList;
