const app = require('./server');


// Start server
const port = normalizePort(process.env.APP_PORT || 5000);
app.listen(port);
console.log(`Express server started on port: ${port}`);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
