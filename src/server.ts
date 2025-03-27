import Fastify from'fastify';
import 'dotenv/config';
import configureServer from './configs/serverConfig';

const server = Fastify({ logger: true });


async function main() {
  
  try {
    
    configureServer(server);

    const port = +(process.env.PORT || 3000);
    await server.listen({ port, host: 'localhost' });

    console.log(`Server running at http://localhost:${port}`);

  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}


main();