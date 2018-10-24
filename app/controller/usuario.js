module.exports = function (app) {
    const Usuario = app.model.usuario;

    this.index = function(req, res) {
        const usuarios = Usuario.find();
        usuarios.exec()
            .then(usuarios => { res.send(usuarios) })
            .catch(err => console.log(err));
    }

    this.login = function (req, res) {
        console.log(req.body);
        const usuario = Usuario.findOne({
            email: req.body.email,
            senha: req.body.senha
        })
        usuario.exec()
            .then(usuario => {
                console.log(usuario);
                res.send(usuario)
            })
            .catch(err => console.log(err));
    }

    this.new = function(res, dados) {
        const usuario = new Usuario(dados);
        usuario.save(function(err, data) {
            res.send(data._id);
        });
    }

    this.delete = function(res, value) {
        Usuario.findOneAndDelete({ name: value }, function(err, data) {
            if (err) {
                res.send(err)
            }

            res.send(data);
        });

    }

    this.update = function(res, dados) {
        const usuario = new Usuario(dados);
        var query = { nome: dados.nome };
        Usuario.findOneAndUpdate(query, { $set: usuario }, function(err, data) {
            if (err) {
                res.send(err)
            }
            res.send(data);
        });

    }

    return this;
}