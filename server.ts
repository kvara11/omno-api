import Fastify from 'fastify';
import 'dotenv/config';
import configureServer from './src/configs/serverConfig';


async function main() {
  
  const server = Fastify({ logger: true });
  configureServer(server);

  try {
    
    if (!process.env.PORT || !process.env.SERVER_URL) {
      throw new Error("Server configurations is not set!");
    }
    
    const port = +(process.env.PORT);
    const host = process.env.SERVER_URL;
    await server.listen({ port, host });

    console.log(`Server running at ${host}:${port}`);

  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}


main();