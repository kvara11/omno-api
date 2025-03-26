import { FastifyInstance } from 'fastify';
import { createTransaction } from '../services/omnoService';

export async function transactionRoutes(server: FastifyInstance) {
  server.post('/create-transaction', async (request, reply) => {
    try {
      const transactionData = request.body;
      const response = await createTransaction(transactionData);
      reply.send(response);
    } catch (error) {
      reply.status(500).send({ error: 'Transaction failed', details: error });
    }
  });
}
