const fs = require("fs");

const data = "New content is added to write file";
const callback = (err) => {
if (err) console.log(err);
console.log("successfully written the data to file");
};

 fs.writeFile('/home/Raghu/Documents/NodeJS-Reading-and-Writing-files/Running js outside the browser/read.txt', data , callback);



 
