import React, { useState } from 'react';
import { Title } from './titleBar';
// import ParticipantList from './participantList';

const Main = () => {
  const [myAddress, setMyAddress] = useState('');
  const [manager, setManager] = useState('');
//   const [participants, setParticipants] = useState(['Participant1', 'Participant2', 'Participant3']); // Example participant list
  const getAddress = () => {
    setMyAddress('0xf73687C4d37d363e8f97Fad2bd03bc7b68876A72');
  };

  const managerOnly = () => {
    setManager('Ashwin');
  };

  return (
    <React.Fragment>
      <div className='main-menu' style={{ marginTop: '3em' }}>
        <div className='container'>
          <p>Participate in the lottery by sending exactly <b>0.01 ether</b></p>
          <button className='participate-button' onClick={getAddress}>Participate</button>
          {myAddress && (
            <div>
              <h4 style={{ display: 'inline', marginLeft: '0px' }}>Your address:</h4><p style={{ display: 'inline' }}>{myAddress}</p>
            </div>
          )}
        </div>
        <div className='container middle-container'>
          <br />
          <p style={{ marginLeft: '0px' }}><b>Manager only:</b> get the Lottery Result</p>
          <button className='getResult-button' onClick={managerOnly}>Get Result</button>
          {manager && (
            <div>
              <h4 style={{ display: 'inline', marginLeft: '0px' }}>Current Manager:</h4><p style={{ display: 'inline' }}>{manager}</p>
            </div>
          )}
        </div>
        <div className='container'>
          <br />
          <p style={{ marginLeft: '0px' }}><b>Only after a lottery round:</b> Set new manager</p>
          <button className='newManager-button' onClick={managerOnly}>Set New Manager</button>
        </div>
      </div>
      {/* Add the ParticipantList component on the right side */}
      {/* <ParticipantList participants={participants} /> */}
    </React.Fragment>
  );
}

export default Main;
