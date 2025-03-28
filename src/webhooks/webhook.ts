import { FastifyInstance } from 'fastify';
import { WebhookData } from '../types/webhook.types';

export function addWebhookRoutes(server: FastifyInstance) {
  
  server.post('/webhook', async (request, reply) => {
    try {

      const webhookData = request.body as WebhookData;
      const threeDsRedirectUrl = webhookData.threeDsRedirectUrl;

      if (!threeDsRedirectUrl) {
        return reply.status(400).send({ error: 'Missing 3DS redirect URL' });
      }

      reply.redirect(threeDsRedirectUrl);

    } catch (error) {

      server.log.error(error);
      reply.status(500).send({ error: 'Webhook processing failed' });
    }
  });

  server.get('/callback', async (_request, reply) => {
    reply.send({ message: 'Payment completed successfully' });
  });

  server.get('/callback-fail', async (_request, reply) => {
    reply.send({ message: 'Payment failed' });
  });
}