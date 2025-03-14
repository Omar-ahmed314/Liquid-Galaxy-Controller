import axios from 'axios';
import { URL } from '../config';
import { getConnection } from '../assets/auth';

export default async function sendKml(file) {
  try {
    const connection = getConnection();
    if (!connection) {
      console.error('Not connected to a machine');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('ip', connection.ip);
    formData.append('port', connection.port);
    formData.append('username', connection.username);
    formData.append('password', connection.password);
    formData.append('screens', connection.machinesCount);
    formData.append('filename', file.filename);

    const response = await axios.post(
      `${URL}/lg-connection/send-kml`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
