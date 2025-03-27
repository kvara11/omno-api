import { FastifyInstance } from 'fastify';
import { CreateTransactionSchema } from '../schemas/transaction.schema';
import { CreateTransactionRequest } from '../types/transaction.types';
import omnoService from '../services/omnoService';


export function addTransactionRoutes(server: FastifyInstance) {

  server.post('/create-transaction', {

    schema: {
      body: CreateTransactionSchema,
    },
  }, async (request, reply) => {

    try {
      
      const transactionData = request.body as CreateTransactionRequest;
      const response = await omnoService.createTransaction(transactionData);

      reply.status(200).send(response);

    } catch (error) {
      reply.send({ error: 'Failed to create transaction' });
    }
  });
}