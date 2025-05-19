require('dotenv').config();
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert')
const ClientError = require('./exceptions/ClientError');

// Load Plugin RS
const rs = require('./api/rs');
const httpService = require('./services/HttpRequest/ThirdPartyApi');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    await server.register([
        {
            plugin: Inert,
        }
    ]);

    await server.register([
        {
          plugin: rs,
          options: {
            service: new httpService(),
            validator: null,
          },
        },
      ]);

    server.ext('onPreResponse', (request, h) => {
        const { response } = request;
        if (response instanceof Error) {
            if (response instanceof ClientError) {
                const newRespone = h.response({
                    status: 'fail',
                    message: response.message,
                });

                newRespone.code(response.statusCode);

                return newRespone;
            }
            if (!response.isServer) {
                return h.continue;
            }

            const r = h.response({
                status: 'error',
                message: "Kami mengalami kegagalan server",
                error: response.message,
                backtrack: response.stack
            });

            r.code(500);
            return r;

        }

        return h.continue;
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();