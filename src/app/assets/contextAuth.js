'use client';

import { useState, createContext } from 'react';

export const contextAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [connection, setConnection] = useState(null);

  return (
    <contextAuth.Provider value={{ connection, setConnection }}>
      {children}
    </contextAuth.Provider>
  );
};
