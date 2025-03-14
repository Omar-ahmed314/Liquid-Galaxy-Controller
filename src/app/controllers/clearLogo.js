import axios from 'axios';
import { URL } from '../config';
import { getConnection } from '../assets/auth';

export default async function clearLogo() {
  try {
    const connection = getConnection();
    if (!connection) {
      console.error('Not connected to a machine');
      return;
    }
    const response = await axios.post(
      `${URL}/lg-connection/clean-logos`,
      {
        ip: connection.ip,
        port: connection.port,
        username: connection.username,
        password: connection.password,
        screens: connection.machinesCount,
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
