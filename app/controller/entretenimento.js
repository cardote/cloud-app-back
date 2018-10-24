module.exports = (app) => {
    const object = {};
    const Entretenimento = app.model.entretenimento;


    object.new = function(res, dados) {
        const entretenimento = new Entretenimento(dados);
        entretenimento.save(function(err, data) {
            res.send(data._id);
        });

    }

    object.delete = function(res, value) {
        Entretenimento.findOneAndDelete({ cnpj: value }, function(err, data) {
            if (err) {
                res.send(err)
            }

            res.send(data);
        });

    }

    object.update = function(res, dados) {
        const entretenimento = new Entretenimento(dados);
        var query = { cnpj: dados.cnpj };
        Entretenimento.findOneAndUpdate(query, { $set: entretenimento }, function(err, data) {
            if (err) {
                res.send(err)
            }
            res.send(data);
        });

    }

    object.index = function(req, res) {
        const entretenimentos = Entretenimento.find();
        entretenimentos.exec()
            .then(entretenimentos => {
                res.send(entretenimentos);

            })
            .catch(err => console.log(err));
    }


    return object;
}