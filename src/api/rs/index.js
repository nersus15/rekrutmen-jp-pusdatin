const RsHandler = require("./handler");
const routes = require("./routes");

module.exports = {
    name: 'rs',
    version: '1.0.0',
    register: async (server, { service, validator }) => {
        
        const rsHandler = new RsHandler(service, validator);
        server.route(routes(rsHandler));
    },
};