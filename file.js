const fs = require("fs");
const { fileURLToPath } = require("url");

const quote = "Someone says smiling increases the life of people. 😊🥰"
fs.writeFile("./awesome.html", quote, (err) => {
    console.log(err);
    console.log("Completed writing");
});

const quote2 = "Saty Happy, Stay Safe";

// Task 1
// Create the below files with quote2 as content
//text-1.html
//text-2.html
//text-3.html
//....
//text-10.html

// const [, , noOfFiles] = process.argv;

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         //console.log(err);
//         console.log(`Completed writing text-${i}.html`); 
//     });
// }

fs.readFile("./cool.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err)
    }else{
    console.log(data);
    }
});

// const quote3 = " Be smile, be Happy 🙂😙!!!"

// const quote4 = "Most of people not known the aim of life." 

// fs.appendFile(
//     "./nice.txt",
// `
// ${quote4}
// `,
// (err) => {
//     console.log("Completed updating");  
// }
// );


fs.unlink("./delete.css", (err) => {
    if(err){
        console.log(err)
    }else{
    console.log("Completed delating");
    }
});
