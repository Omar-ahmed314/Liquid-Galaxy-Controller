import axios from 'axios';
import { URL } from '../config';
import { getConnection } from '../assets/auth';

export default async function clearKml() {
  try {
    const connection = getConnection();
    if (!connection) {
      console.error('Not connected to a machine');
      return;
    }
    const response = await axios.post(
      `${URL}/lg-connection/clean-visualization`,
      {
        ip: connection.ip,
        port: connection.port,
        username: connection.username,
        password: connection.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
