// Import the 'http' module for creating an HTTP server.
import * as http from 'http';

// Define the port on which your server will listen.
const port: number = 3000;

// Create an HTTP server.
const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    // Set the response headers.
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200; // HTTP status code 200 (OK)

    // Send a simple response to the client.
    res.end('Hello, Node.js HTTP Server with TypeScript!');
});

// Start the server and make it listen on the specified port.
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
