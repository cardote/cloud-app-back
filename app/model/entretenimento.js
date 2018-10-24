const mongoose = require('mongoose');
module.exports = (app) => {
    const object = {};

    const Schema = mongoose.Schema;
    const Entretenimento = new Schema({
        nome: { type: String },
        cnpj: { type: String },
        endereco: { type: String },
        categoria: { type: String }
    }, {
        timestamps: true //cria os campos creat_at e update_at
    });

    return mongoose.model('Entretenimento', Entretenimento);
}