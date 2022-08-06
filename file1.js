const fs = require("fs");

const quote = "Silent is best answer for every person.😊🥰"
fs.writeFile("./awesome1.html", quote, (err) => {
    console.log(err);
    console.log("Completed writing");
});

const quote2 = "Saty Happy, Stay Healthy";

for (let i = 1; i <= 5; i++) {
    fs.writeFile(`./matchup/text-${i}.html`, quote2, (err) => {
        //console.log(err);
        console.log(`Completed writing text-${i}.html`); 
    });
}