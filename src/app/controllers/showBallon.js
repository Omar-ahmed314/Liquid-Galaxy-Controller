import axios from 'axios';
import { URL } from '../config';
import { getConnection } from '../assets/auth';

const kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"
xmlns:gx="http://www.google.com/kml/ext/2.2"
xmlns:atom="http://www.w3.org/2005/Atom">
  <Document>
  <name>Lg Logo</name>
  <open>1</open>
  <description>This logo is located at the left most screen</description>
  <Folder>  
  <name>tags</name>
  <Style>
  <ListStyle>
    <listItemType>checkHideChildren</listItemType>
    <bgColor>00ffffff</bgColor>
    <maxSnippetLines>2</maxSnippetLines>
    </ListStyle>
  </Style>
  <ScreenOverlay>
  <name>Liquid Galaxy Logo</name>
      <Icon>
        <href>https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXmdNgBTXup6bdWew5RzgCmC9pPb7rK487CpiscWB2S8OlhwFHmeeACHIIjx4B5-Iv-t95mNUx0JhB_oATG3-Tq1gs8Uj0-Xb9Njye6rHtKKsnJQJlzZqJxMDnj_2TXX3eA5x6VSgc8aw/s320-rw/LOGO+LIQUID+GALAXY-sq1000-+OKnoline.png</href>
      </Icon>
        <overlayXY x="0" y="1" xunits="fraction" yunits="fraction"/>
        <screenXY x="0" y="0.98" xunits="fraction" yunits="fraction"/>
        <rotationXY x="0" y="0" xunits="fraction" yunits="fraction"/>
        <size x="0" y="0" xunits="pixels" yunits="fraction"/>
    </ScreenOverlay>
    </Folder>
    </Document>
</kml>`;

export default async function showBallon() {
  try {
    const connection = getConnection();
    if (!connection) {
      console.error('Not connected to a machine');
      return;
    }
    const data = {
      ip: connection.ip,
      port: connection.port,
      username: connection.username,
      password: connection.password,
      screens: connection.machinesCount,
      kml: kml,
    };
    console.log(data);
    const response = await axios.post(
      `${URL}/lg-connection/show-balloon`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(connection);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
