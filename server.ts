import Fastify from 'fastify';
import 'dotenv/config';
import configureServer from './src/configs/serverConfig';


async function main() {
  
  const server = Fastify({ logger: true });
  configureServer(server);

  try {

    const port = +(process.env.PORT || 3000);
    await server.listen({ port, host: 'localhost' });

    console.log(`Server running at http://localhost:${port}`);

  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}


main();