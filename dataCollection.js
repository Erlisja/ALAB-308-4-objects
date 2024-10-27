/* Part 1: Refactoring Old Code */

/*
For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs.
 Now that you have knowledge of arrays and objects, how would you change your approach to this problem? 
 */

const CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26"
// split the file into rows each time we encoutes \n and then split the rows into cells each time we encounter a comma
const rows = CSV.split("\n");
let cellCount = 0;
for (const  row of rows) {
    const cells = row.split(","); 
    console.log(cells);
    cellCount = cells.length;
} 

// Part 2: Expanding Functionality

/* Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns.
This should be calculated dynamically based on the first row of data.
For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row.
You can safely assume that all rows that follow will contain the same number of entries per row. */

console.log(cellCount);

/* Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use. */

const dimArray = [];
for (const row of rows) {
    const cells = row.split(",");
    dimArray.push(cells);
}
console.log(dimArray);

//Part 3: Transforming Data

/* Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself. */

const objectsArray = [];   // this is the array that will store the objects
const headings = dimArray[0];
for (let i = 1; i < dimArray.length; i++) {
    const obj = {};
    for (let j = 0; j < dimArray[i].length; j++) {
        const key = headings[j].toLowerCase();
        obj[key] = dimArray[i][j];
    }
    objectsArray.push(obj);
}console.log(objectsArray);

//  Part 4: Sorting and Manipulatiog Data

/* Using array methods, accomplish the following tasks, in order upon the result of Part 3:


Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
 */

//Remove the last element from the sorted array.
objectsArray.pop();
console.log(objectsArray);
//Insert the following object at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }
objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(objectsArray);
//Add the following object to the end of the array: { id: "7", name: "Bilbo", occupation: "None", age: "111" }
objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objectsArray);

/* Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
This calculation should be accomplished using a loop. */
// Calculate the average age of the group
let avgAge = 0;
let total = 0;
for (const objAge of objectsArray){
     total += parseInt(objAge.age);   // parseInt converts the age (which is string) to a number
     console.log(total);
}
avgAge = total / objectsArray.length;
console.log(`The average age of the group is: ${avgAge}`);
