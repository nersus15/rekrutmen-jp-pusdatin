const NotFoundError = require("../../exceptions/NotFoundError");
const ServerError = require("../../exceptions/ServerError");

class ThirdPartyApi {
    constructor(){
        this.baseurl = 'https://dinkes.jakarta.go.id/apps/jp-2024/';
    }
    async getAllRS(){
        const dataRs = await fetch(`${this.baseurl}/all-rsud.json`).then(res => {
            const ct = res.headers.get('content-type');
            if(ct.toLowerCase() != 'application/json'){
                throw new ServerError("Tidak dapat mengambil resources yang dibutuhkan!");
            }else if(res.status == 404){
                throw new NotFoundError("Resource yang dibutuhkan tidak ditemukan");
            }
            return res.json();
        });
        
        const statusRs = await fetch(`${this.baseurl}/all-rs-terkoneksi.json`).then(res => {
            const ct = res.headers.get('content-type');
            if(ct.toLowerCase() != 'application/json'){
                throw new ServerError("Tidak dapat mengambil resources yang dibutuhkan!");
            }else if(res.status == 404){
                throw new NotFoundError("Resource yang dibutuhkan tidak ditemukan");
            }
            return res.json();
        });

        const response = dataRs.map(rs => {
            const status_rs = statusRs.find(status => status.organisasi_id == rs.organisasi_id);

            const {kode_rs, ...keys} = rs;
            return {...keys, status: status_rs ? status_rs.status : null};
        });
        return response;
    }    
}

module.exports = ThirdPartyApi;