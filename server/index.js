const express = require('express');
const next = require('next');
require('dotenv').config();
const bodyParser  = require('body-parser');
const cors = require('cors');

// import routers to organize endpoints
const helloRouter = require('./endpoints/hello');

// configure next server to extend with express
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();

    // middleware
    server.use(express.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // use routers
    server.use("/hello", helloRouter.router);


    // server.get("/", (req, res) => {
    //     res.send('Hello World!');
    //     res.end();
    // })

    // server handle for next
    server.all('*', (req, res) => {
        return handle(req, res)
    });


    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });

}).catch((err) => {
    console.log(`> Error: ${err}`);
    process.exit(1);
});