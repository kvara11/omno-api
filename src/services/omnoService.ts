import axios, { AxiosResponse } from 'axios';
import { CreateTransactionRequest } from '../types/transaction.types';

export class OmnoService {

  async createTransaction(data: CreateTransactionRequest) {
    
    const authToken = await this.getOmnoAuthToken();
    
    const URL = `${process.env.OMNO_BASE_URL}${process.env.TRANS_CREATE_URL}`;
  
    const response = await axios.post(URL, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });
  
    return response.data;
  }



 async getOmnoAuthToken(): Promise<string> {

  
  const URL = process.env.AUTH_FULL_URL as string;
  const CLIENT_ID = process.env.OMNO_CLIENT_ID as string;
  const CLIENT_SECRET = process.env.OMNO_CLIENT_SECRET as string;
  
  if (!URL || !CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing required parameters for Authentication');
  }

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

    return response.data.access_token;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
}

export default new OmnoService();