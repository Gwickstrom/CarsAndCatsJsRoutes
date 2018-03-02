var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    if(request.url === '/'){
        fs.readFile('./views/index.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/views/cars.html'){
        fs.readFile('./views/cars.html', 'utf8',
        function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/views/cats.html'){
        fs.readFile('./views/cats.html', 'utf8',
        function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/views/new.html'){
        fs.readFile('./views/new.html', 'utf8',
        function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car1.jpg'){
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car2.jpg'){
        fs.readFile('./images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car3.jpg'){
        fs.readFile('./images/car3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat.jpg'){
        fs.readFile('./images/cat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    // The CSS for the below function doesn't work because cars is not a file or folder, readFile doesn't recognize it.
    else if(request.url === '/views/cars/new.html'){
        fs.readFile('./views/new.html', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/pizza.png'){
    // notice we won't include the utf8 encoding
        fs.readFile('./images/pizza.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.writeHead(404);
        response.end("File not found!");
    }
});

server.listen(8000);
