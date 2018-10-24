const mongoose = require('mongoose');
module.exports = (app) => {
    const Schema = mongoose.Schema;
    const Usuario = new Schema({
        nome: { type: String },
        email: { type: String },
        senha: { type: String }
    }, {
        timestamps: true //cria os campos creat_at e update_at
    });

    return mongoose.model('Usuario', Usuario);
}