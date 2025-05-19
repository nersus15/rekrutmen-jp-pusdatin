class RsHandler{
    constructor(service, validator) {
        this._service = service;
        this._validator = validator;
        
        this.getRs = this.getRs.bind(this);
        this.getSummary = this.getSummary.bind(this);
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

    async getSummary(request) {
        // Get QueryParams and assign to filters
        const {kelas, kabkota} = request.query;
        const filters = {
            kelas, kabkota
        };

        // Validasi Filter
        if(filters.kelas || filters.kabkota){
            this._validator.validateFilter(filters);
        }

        const response = await this._service.getAllRS(true, filters);
        
        return {
            status: 'success',
            data: {
                response
            },
        };
    }
}

module.exports = RsHandler;