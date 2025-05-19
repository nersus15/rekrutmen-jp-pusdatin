const Joi = require("joi");
const ClientError = require("../../exceptions/ClientError");
const Utils = require("../../utils");

const rsValidator = {
    validateFilter: (payload) => {
        // Capitalize payload before validate
        if(payload.kelas){
            payload.kelas = payload.kelas.toUpperCase();
        }

        if(payload.kabkota){
            payload.kabkota = Utils.capitalizeWords(payload.kabkota);
        }

        const validKelas = ['A', 'B', 'C', 'D'];
        const validKabKota = [
            'Kepulauan Seribu',
            'Jakarta Timur',
            'Jakarta Barat',
            'Jakarta Pusat',
            'Jakarta Selatan',
            'Jakarta Utara'
        ];
        const payloadSchema = Joi.object({
            kelas: Joi.string().valid(...validKelas),
            kabkota: Joi.string().valid(...validKabKota)
        });

        const validationResult = payloadSchema.validate(payload);
        if(validationResult.error){
            throw new ClientError(validationResult.error.message);
        }
    }
    
}

module.exports = rsValidator;