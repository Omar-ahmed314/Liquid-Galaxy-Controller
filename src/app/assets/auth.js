function getConnection() {
  const connection = localStorage.getItem('lg-connection');
  return connection ? JSON.parse(connection) : undefined;
}

function setConnection(data) {
  if (data) {
    localStorage.setItem('lg-connection', JSON.stringify(data));
    return true;
  }
  return false;
}

export { getConnection, setConnection };
