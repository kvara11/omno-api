import axios from 'axios';
import { TransactionRequest } from '../types/transaction';
import { getOmnoAuthToken } from '../utils/auth';

const OMNO_API_URL = 'https://api.omno.com/transaction/h2h/create';

export async function createTransaction(data: TransactionRequest) {
    
  const authToken = await getOmnoAuthToken();

  const response = await axios.post(OMNO_API_URL, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}
