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
      transactionData.hookUrl = `${process.env.SERVER_URL}:${process.env.PORT}/webhook`;
      transactionData.callback = `${process.env.SERVER_URL}:${process.env.PORT}/callback`;
      transactionData.callbackFail = `${process.env.SERVER_URL}:${process.env.PORT}/callback-fail`;
      
      const response = await omnoService.createTransaction(transactionData);

      reply.status(200).send(response);

    } catch (error) {
      reply.send({ error: 'Failed to create transaction' });
    }
  });
}