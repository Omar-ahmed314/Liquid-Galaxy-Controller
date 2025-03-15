'use client';

import showLogo from './controllers/showLogo';
import clearLogo from './controllers/clearLogo';
import sendKml from './controllers/sendKml';
import clearKml from './controllers/clearKml';
import showBallon from './controllers/showBallon';
import relaunch from './controllers/relaunchLg';
import { getConnection } from './assets/auth';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [connectionInfo, setConnectionInfo] = useState(null);
  const [connected, setConnected] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const fileInput = useRef(null);

  useEffect(() => {
    const connection = getConnection();
    if (connection) {
      setConnectionInfo(connection);
      setConnected(true);
    }
  }, []);

  const handleSubmit = async function () {
    const file = fileInput.current.files[0];
    if (!file) {
      console.error('No file selected');
      return;
    }

    const response = await sendKml(file);
    console.log(response);
  };

  return (
    <div className="home-page">
      <div className={'overlay'.concat(isFormOpen ? '' : ' hidden')}>
        <div className="file-window">
          <div className="file-wrapper">
            <input
              type="file"
              name="filename"
              accept="text/plain, .txt"
              ref={fileInput}
            />
          </div>
          <div className="confirm-btns">
            <button onClick={() => handleSubmit()}>Send Kml</button>
            <button onClick={() => setIsFormOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="home-container container">
        <div className="connection-wrapper">
          <div className="connection-info">
            <h1>
              {connected
                ? connectionInfo.ip
                : 'We Connect You to the World, try?'}
            </h1>
            <p>{connected ? '🟢 Connected' : '🔴 Disconnected'}</p>
          </div>
        </div>
        <div className="control-btns">
          <button onClick={showLogo}>Show Logo</button>
          <button onClick={showBallon}>Show Ballon</button>
          <button onClick={() => setIsFormOpen(true)}>Send Kml</button>
          <button onClick={clearLogo}>Clear Logo</button>
          <button onClick={clearKml}>Clear Kml</button>
          <button onClick={relaunch}>Relaunch</button>
        </div>
      </div>
    </div>
  );
}
