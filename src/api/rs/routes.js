const routes = (handler) => [
    {
        method: 'GET',
        path: '/rs/lists',
        handler: handler.getRs,
    },
    
];

module.exports = routes;