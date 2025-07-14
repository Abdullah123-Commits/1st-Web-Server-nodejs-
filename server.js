// =============== start of core node.js modules ======
import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
//=============== end of core node.js modules =======//
const PORT = 8000;

// GET CURRENT PATH 
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename, __dirname);
//============================//

const server = http.createServer( async(req, res) => {
    // specializing our server with res only in case of 'GET' request
    try {
        //CHECK IF 'GET' REQUEST
        if (req.method === 'GET') {
            let filePath;
            // checking URL by req.url to send response, i.e routing
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
                // res.writeHead(200, { 'Content-Type': 'text/html' } );
                // res.end('<h1>Homepage</h1>');
            }
            else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
                // res.writeHead(200, { 'Content-Type': 'text/html' } );
                // res.end('<h1>About</h1>');
            }
            else {
                throw new Error('Not Found');
                // res.writeHead(400, { 'Content-Type': 'text/html' } );
                // res.end('<h1>Not Found</h1>');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();

        }
        else {
            throw new Error('Method not Allowed');
        }
    }
    catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' } );
        res.end('Server Error');
    }
    //SOME PROPERTIES:
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404;
    // res.write('Hello World');
    //doing quivalent(e) with res.end()
    // res.end('<h1>Hello World</h1>');
    //using writeHead() method

    
    
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});