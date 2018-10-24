module.exports = (app) => {
    const object = {};
    const Usuario = app.model.usuario;


    object.index = function(req, res) {
        const usuarios = Usuario.find();
        usuarios.exec()
            .then(usuarios => {
                res.send(usuarios);

            })
            .catch(err => console.log(err));
    }


    object.new = function(res, dados) {
        const usuario = new Usuario(dados);
        usuario.save(function(err, data) {
            res.send(data._id);
        });

    }

    object.delete = function(res, value) {
        Usuario.findOneAndDelete({ name: value }, function(err, data) {
            if (err) {
                res.send(err)
            }

            res.send(data);
        });

    }

    object.update = function(res, dados) {
        const usuario = new Usuario(dados);
        var query = { nome: dados.nome };
        Usuario.findOneAndUpdate(query, { $set: usuario }, function(err, data) {
            if (err) {
                res.send(err)
            }
            res.send(data);
        });

    }




    return object;
}