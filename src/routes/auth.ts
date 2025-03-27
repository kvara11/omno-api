import axios, { AxiosResponse } from 'axios';

const URL = process.env.AUTH_FULL_URL as string;
const CLIENT_ID = process.env.OMNO_CLIENT_ID as string;
const CLIENT_SECRET = process.env.OMNO_CLIENT_SECRET as string;


const checkRequiredParams = () => {
  if (!URL || !CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing required parameters for Authentication');
  }
};


export async function getOmnoAuthToken(): Promise<string> {

  checkRequiredParams();

  try {
    const response: AxiosResponse = await axios.post(URL,
      {
        client_id: CLIENT_ID,
        client_secret:CLIENT_SECRET,
        grant_type: 'client_credentials',
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );


    if (!response.data.access_token) {
      throw new Error('Authorization failed: No access token.');
    }

    return response.data;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}