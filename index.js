console.log("-----------------------------PART 1---------------------------------------------");
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

// initialize currrentCell and cells Variables

let currentCell = 1
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let rows = [];
let currentRow = 0;

for(let i in str){
    switch (str[i]){
        case ",":
            if (currentCell === 1) currentCell = 2;
            else if (currentCell === 2) currentCell = 3;
            else if (currentCell === 3) currentCell = 4;
            else currentCell = 1;
            break;

        case "\n":
            rows.push([cell1, cell2, cell3, cell4]);
            console.log(rows[currentRow]);
            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
            currentCell = 1;
            currentRow++;
            break;

        default:
        // Concatenate the current character to the appropriate cell
            switch (currentCell) {
                case 1:
                    cell1 += str[i];
                    break;
                case 2:
                    cell2 += str[i];
                    break;
                case 3:
                    cell3 += str[i];
                    break;
                case 4:
                    cell4 += str[i];
                    break;
            }
            break;
    }

}

if (cell1 || cell2 || cell3 || cell4) {
    rows.push([cell1, cell2, cell3, cell4]);
    console.log(rows[currentRow]);
}

console.log("-----------------------------PART 2---------------------------------------------");

console.log(rows);


console.log("-----------------------------PART 3---------------------------------------------");
let data = []; // Initialize an empty object to store the data
// Convert the first row to lowercase keys and place it in a new array
const keys = rows[0].map(key => key.toLowerCase());

// Remove the first row (keys) from the rows array
rows.shift();
// Use forEach to create objects with keys and values
rows.forEach(row => {
    let obj = {};
    keys.forEach((key, index) => {
        obj[key] = row[index];
    });
    data.push(obj); // Add the object to the end of the 'data' array
});
  console.log(data);


  console.log("-----------------------------PART 4---------------------------------------------");

//   Remove the last element from the sorted array.
data.pop();
// Insert the object at index 1
data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(data);

let ageTotal = 0;
let count = data.length;
data.forEach(obj => {
    ageTotal += Number(obj.age);
})
// calculate the average age of the group
let averageAge =  ageTotal / count;

console.log("Average Age: ", averageAge);

console.log("-----------------------------PART 5---------------------------------------------");


const csvConvert = data.map(obj => {
    return Object.values(obj).join(",");
}).join(",");
console.log(csvConvert);
