const rect= (x, y, callback) => {//We will assign a function as a value for the entire export instead of as a method of the export.  When we do that, we have to use module.exports (can't use just exports).
    if(x<=0 || y <=0) {//Error handling: Error callback pattern is used all the time in Node applications. It is a convention expected by Node developers. In this error, we will check for the error condition.
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`)); //Always have a callback with an error function first when writing in Node.js.
    } else { //If there is no error, then we have simulated a delay in the lines below to wait for 2000 milliseconds.
        setTimeout(()=>
            callback(null, { //callback function has two arguments: null and the object containing perimeter and area. null means that we didn't get an error, so error function will not show.
                perimeter:() => 2*(x+y), //We have an empty parameter list (nothing inside the parenthesis) because this inner function is using closures (has access to the scope/variables in the outer function)
                area: () => x*y,
            }),
            2000 ); //how many milliseconds to wait
    }
}

export default rect; 