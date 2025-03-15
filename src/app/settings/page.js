'use client';

import { URL } from '../config';
import { useState, useEffect, useRef } from 'react';
import { setConnection, getConnection } from '../assets/auth';
import axios from 'axios';

export default function Settings() {
  const [connected, setConnected] = useState(false);
  const ipRef = useRef('');
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const machinesCountRef = useRef('');
  const portRef = useRef('');

  useEffect(() => {
    const data = getConnection();
    if (data) {
      setConnected(true);
    }
  }, []);

  const connect = async function () {
    const ip = ipRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const machinesCount = machinesCountRef.current.value;
    const port = portRef.current.value;
    const data = {
      ip,
      port,
      password,
      username,
    };
    const response = await axios.post(`${URL}/lg-connection/connect-lg`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setConnection({ ...data, machinesCount });

    return response.data;
  };

  const handleConnect = async function () {
    try {
      const response = await connect();
      setConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="set-page">
      <div className="set-container container">
        <div className="set-wrapper">
          <div className="set-header">
            <h3>{connected ? '🟢 Connected' : '🔴 Disconnected'}</h3>
          </div>
          <div className="set-form">
            <div className="set-input">
              <label>Machine IP</label>
              <input
                type="text"
                id="machine-ip"
                name="machine-ip"
                placeholder="ex 192.168.201.1"
                ref={ipRef}
              />
            </div>
            <div className="set-input">
              <label>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="lg"
                ref={usernameRef}
              />
            </div>
            <div className="set-input">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*****"
                ref={passwordRef}
              />
            </div>
            <div className="set-input">
              <label>Machines Count</label>
              <input
                type="text"
                id="machines-count"
                name="machines-count"
                placeholder="ex 3"
                ref={machinesCountRef}
              />
            </div>
            <div className="set-input">
              <label>Port</label>
              <input
                type="text"
                id="port"
                name="port"
                placeholder="ex 22"
                ref={portRef}
              />
            </div>
          </div>

          <div className="set-footer">
            <button className="set-btn" onClick={handleConnect}>
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
