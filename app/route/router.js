module.exports = function (app) {
    const usuario = app.controller.usuario;
    const entretenimento = app.controller.entretenimento;

    // usuario
    app.get('/usuarios', (req, res) => usuario.index(req, res));
    
    app.post('/usuario/login', (req, res) => usuario.login(req, res));
    app.post('/usuario/new', (req, res) => usuario.new(res, req.body));
    app.post('/usuario/update', (req, res) => usuario.update(res, req.body));
    app.post('/usuario/delete', (req, res) => usuario.delete(res, req.body.nome));

    // entretenimento
    app.post('/entretenimento/new', (req, res) => entretenimento.new(res, req.body));
    app.get('/entretenimentos', (req, res) => entretenimento.index(req, res));
    app.post('/entretenimento/update', (req, res) => entretenimento.update(res, req.body));
    app.post('/entretenimento/delete', (req, res) => entretenimento.delete(res, req.body.cnpj));

    // 404
    app.get('*', (req, res) => res.redirect('/usuarios'));

    return this;
}