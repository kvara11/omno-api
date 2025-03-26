import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifySwagger from 'fastify-swagger';
import { transactionRoutes } from './routes/transactions';
import { webhookRoutes } from './routes/webhooks';

const server = Fastify({ logger: true });

// Register Plugins
server.register(fastifyCors);
server.register(fastifyHelmet);
server.register(fastifySwagger, {
  openapi: {
    info: { title: 'Omno API Integration', version: '1.0.0' },
  },
});

// Register Routes
server.register(transactionRoutes);
server.register(webhookRoutes);

// Start Server
const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`Server running at http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
