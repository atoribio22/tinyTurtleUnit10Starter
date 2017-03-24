TinyTurtle.apply(window, [undefined, 400, 400]);
/*global TinyTurtle*/
/*global forward*/
/*global right*/
/*global stamp*/
/*global left*/


var len = 50;

function square(){
right(30);
forward(len);
right(90);
forward(len);
right(90);
forward(len);
right(90);
forward(len);
right(90);
forward(len);
}

// Triangle function
var tri_size = 75
function triangle(){
right(270);
forward(tri_size);
right(120);
forward(tri_size);
right(120);
forward(tri_size);
}

stamp();
triangle(tri_size);
square(len);


// Hexagon function
var size =50 
function hexagon(){
    right(60);
    forward(size);
    left(60);
    forward(size);
    left(60);
    forward(size);
    left(60);
    forward(size);
    left(60);
    forward(size);
    left(60);
    forward(size);
}


hexagon(size);

// function house(){
//     triangle(size);
//     square(size);
// }

// stamp();
// house(size);





