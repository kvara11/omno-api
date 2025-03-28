import { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { addTransactionRoutes } from '../routes/transactions';


export default function configureServer(server: FastifyInstance) {

    server.register(fastifyCors);
    server.register(fastifyHelmet);
    server.register(fastifySwagger, {
        openapi: {
            info: {
                title: 'Omno API',
                description: 'Omno API Documentation',
                version: '1.0.0'
            },
            servers: [
                {
                    url: 'http://localhost'
                }
            ],
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: 'http',
                        scheme: 'bearer'
                    }
                }
            },
            tags: [
                {
                    name: 'Root',
                    description: 'Root endpoints'
                }
            ]
        }
    });

    server.register(fastifySwaggerUi, {
        routePrefix: '/api-docs',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        uiHooks: {
            onRequest: function (_request, _reply, next) {
                next();
            },
            preHandler: function (_request, _reply, next) {
                next();
            }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject) => {
            return swaggerObject;
        },
        transformSpecificationClone: true
    });

    server.register(addTransactionRoutes);
}