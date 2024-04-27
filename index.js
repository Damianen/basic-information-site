import http from 'http';
import fs from 'fs';
import fsp from 'fs/promises';
import url from 'url';

http.createServer(async (req, res) => {
    let q = url.parse(req.url, true);
    let filename = '.' + q.pathname;
    if (filename === './') {
        filename = './index.html';
    }
    try {
        const data = await fsp.readFile(filename);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    } catch (err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("./404.html", (err, data) => {
            res.write(data);
            return res.end();
        });
    }    
}).listen(8080);