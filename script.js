TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}


function triangle (length){ 
    forward(length);
    right(120);
    forward(length);
    right(120);
    forward(length);
    right(120);
}

function rectangle(pixels){
    forward(pixels);
    right(90);
    forward(pixels);
    right(90);
    forward(pixels);
    right(90);
}
rectangle(80);
rectangle(100);
triangle(75);
triangle(150);
// Type your function call below
//square();

stamp();











