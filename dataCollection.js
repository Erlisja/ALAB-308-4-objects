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

