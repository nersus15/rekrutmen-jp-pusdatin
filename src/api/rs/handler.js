class RsHandler{
    constructor(service, validator) {
        this._service = service;
        this._validator = validator;
        
        this.getRs = this.getRs.bind(this);
    }

    async getRs(request) {
        const response = await this._service.getAllRS();
        
        return {
            status: 'success',
            data: {
                response
            },
        };
    }
}

module.exports = RsHandler;