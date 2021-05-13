import rect from "./rectangle.mjs"; 

function solveRect(l,w) { //l stands for length and w stands for width
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`); //Using Template Literals (because of backticks `)

    //Importing the function from rectangle.js.  We are calling this function here. In rectangle.js, the function accepts two positive values (in the file it is x and y) and the callback funtion. x and y will be l and w in this file.
    //The callback function is the third parameter for the function from rectangle.js. In the line below we are defining this function. 
    rect(l,w, (err, rectangle) => { //If l and w (x and y) are positive function, then the callback function (err,rectangle) will run.
        if (err) {
            console.log("Error:", err.message);
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`); //Empty parameter lists (nothing in the parenthesis) because the values are already in the rectangle.js file.
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log("This statement is logged after the call to rect()");
}

//Call the function to test it
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(5,-3);