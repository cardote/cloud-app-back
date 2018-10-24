const mongoose = require('mongoose');

module.exports = (app) => {
    const object = {};

    const uri = 'mongodb://localhost:27017/startup';

    mongoose.set('useFindAndModify', false);
    mongoose.connect(uri, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Banco conectado!');
    })

    return object;
}