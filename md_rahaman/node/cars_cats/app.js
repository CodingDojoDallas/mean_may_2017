
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:

     if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    

    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    else if (request.url === '/cats') {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    else if (request.url === "/cars/new") {
         fs.readFile('views/car_new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    else if(request.url === '/images/cars/car1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars/car1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        })
    }

    else if(request.url === '/images/cars/car2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars/car2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        })
    }

    else if(request.url === '/images/cats/cat1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats/cat1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        })
    }

     else if(request.url === '/images/cats/cat2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats/cat2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        })
    }


    else if(request.url === '/stylesheets/cars.css'){
    fs.readFile('./stylesheets/cars.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
    }



    else {
        fs.readFile('views/error.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
