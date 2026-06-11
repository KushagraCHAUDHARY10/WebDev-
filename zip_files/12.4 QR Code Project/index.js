/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
var qrLink;
import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: "input",
            name: "link",
            message: "Type the like for the qr",
        }
    ])
    .then((answers) =>{
        console.log(`Your qr is generated for ${answers}`);
    })
    
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Can't render prompt here.");
        } else {
            console.error("Error:", error);
        }
    });


// var qr = require('qr-image');

// var qr_png = qr.image(qrLink, { type: 'png' });
// qr_svg.pipe(require('fs').createWriteStream('qr_image.png'));

// const fs = require("fs")

// fs.writeFile("message.txt", "Hello form Node.js!!", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
