const routes = (handler) => [
    {
        method: 'GET',
        path: '/rs/lists',
        handler: handler.getRs,
    },

    {
        method: 'GET',
        path: '/rs/summary',
        handler: handler.getSummary,
    },
    
];

module.exports = routes;