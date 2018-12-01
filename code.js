let int = 1534236469;

var reverse = function(x) {

    string = x.toString(); // turn given number into a string
    array = string.split(""); // split string into an array

    if (array[0] == '-') {
      array.shift(); // if the first array index is '-', delete '-'
      while (array[0] === "0") { // delete the first index until array no longer begins with a 0
        array.shift();
      };
      array.push('-') //add '-' back to start of array
    }

    array.reverse(); // reverse the array

    solution = array.join(""); // set new var solution to the array joined into a string

    solution = parseInt(solution); // turn var solution into an integer

    if (solution <= Math.pow(-2, 31) || solution >= Math.pow(2, 31) + 1) { // if solution overflows return 0 instead
       return 0;
     }

    return solution; // return final solution
};

reverse(int);
