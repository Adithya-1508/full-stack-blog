const http = require('http');
const fs = require('fs');
// This returns the request object to the console...
// const server = http.createServer((req, res) => {
//     console.log(req);
// });

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
// });

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);


// we are adding content via the server in the webpage..
// if we run localhost:3000 we will get Hello people on the webpage.
    res.setHeader("Content-type", "text/html");
    
    // These lines represent how to write  simple content to the browser from the server
    // res.write('<p>Hello and welcome</p>')
    // res.end()


    //Way to write multiple routes for different pages
    
    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;

            //This is how we redirect a page using switch case
            // Redirection flow   /about-me ----> redirects to /about
        // case '/about-me':
        //     res.statusCode = 301;
        //     res.setHeader('Location', '/about');    
        default:
            path += '404.html'
            break;        
    }
    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
});





server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});



