import axios from 'axios';
import { CreateTransactionRequest } from '../types/transaction.types';
import { getOmnoAuthToken } from '../routes/ssoAuth'

export class OmnoService {

  async createTransaction(data: CreateTransactionRequest) {
    
    const authToken = await getOmnoAuthToken();
    
    const URL = `${process.env.OMNO_BASE_URL}${process.env.TRANS_CREATE_URL}`;
  
    const response = await axios.post(URL, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });
  
    return response.data;
  }

}

export default new OmnoService();