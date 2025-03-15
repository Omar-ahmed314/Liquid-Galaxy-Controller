'use client';

import useAuth from './useAuth';

const getConnection = () => {
  const { connection } = useAuth();
  return connection;
};

const setConnection = (data) => {
  const { setConnection } = useAuth();
  setConnection(data);
};

export { getConnection, setConnection };
