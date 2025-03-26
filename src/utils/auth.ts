import axios from 'axios';

const OMNO_AUTH_URL = 'https://docs.omno.com/reference/machine-to-machine-authorization-api';
const CLIENT_ID = '78845621-b958-4dca-9dff-b75cda41c604';
const CLIENT_SECRET = '21617fc5-5da1-4eeb-97c4-9e7f3e6f2886';

export async function getOmnoAuthToken(): Promise<string> {
  const response = await axios.post(OMNO_AUTH_URL, {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'client_credentials',
  });

  return response.data.access_token;
}
