import { FastifyInstance } from 'fastify';

export async function webhookRoutes(server: FastifyInstance) {
  server.post('/webhook', async (request, reply) => {
    console.log('Webhook received:', request.body);

    if (request.body?.redirectUrl) {
      return reply.redirect(request.body.redirectUrl);
    }

    reply.send({ status: 'Webhook processed' });
  });
}
