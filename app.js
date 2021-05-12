//JavaScript Program that was tested with Node.
/*const rect= { //rect stands for rectangle
    perimeter: (x,y) => 2* (x+y),
    area: (x,y) => x*y
}; */

const rect= require("./rectangle") //Will look at the same folder (by using ./) and look for the file named rectangle.
//The perimeter and area from rectangle.js was imported here by using the require() function.  The line above is equivalent to the object in lines 2-5.

function solveRect(l,w) { //l stands for length and w stands for width
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`); //Using Template Literals (because of backticks `)

    if (l<=0 || w <=0) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l,w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l,w)}`);
    }
}

//Call the function to test it
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(5,-3);