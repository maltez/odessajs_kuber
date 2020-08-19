const app = require('express')();
const morgan = require('morgan')('combined');
const { createServer } = require('http');

const PORT = process.env.PORT;
const HOST = process.env.HOST;
let isReady = false; 


app.use(morgan);

app.get('/health', (req, res) => {
    res.statusCode = 200;
    res.json({
        status: 'Helathy',
        message: 'Healthty host'
    })
});

app.get('/ready', (req, res) => {
    res.statusCode = isReady ? 200 : 404
    res.json({
        status: isReady ? 'Ready' : " Not Ready"
    });
});

app.get('/ping', (req, res) => {
    res.statusCode = 200;
    res.json({
        status: 'OK',
        message: 'Pong'
    });
});

process.on('SIGINT', () => {
    console.log('Bye!!!!');
    process.exit(0);
});

process.on("exit", () => {
    console.log('Kill me');
})

process.on('SIGTERM', () => {
    console.log('Just do it');
    process.exit(0);
});


const server = createServer(app);

server.listen(PORT, HOST, () => {
    console.log(`Server listen on ${HOST}:${PORT}`);
    setTimeout(() => {
        isReady = true;
    }, 20000);
});