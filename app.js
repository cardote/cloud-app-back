const express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();


var allowedOrigins = ['http://localhost:8080'];

app.use(cors({

    origin: function(origin, callback) {
        // Permite conexoes sem origem, como apps e curl
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'Essa origem não possui acesso!';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },

    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],

    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Autoload com o consign
 */
consign({ cwd: 'app' })
    .include('model')
    .then('controller')
    .into(app);

// inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => console.log(`Servidor iniciado em: http://localhost:${port}`));