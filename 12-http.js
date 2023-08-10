const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welocome to Ile Yoruba')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`<h1>Oops!</h1><p>We don reach here be that</p><a href='/'>Go back</a>`)
})

server.listen(4100);