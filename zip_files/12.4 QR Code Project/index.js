/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            type: "input",
            name: "link",
            message: "Type the like for the qr",
        }
    ])
    .then((answer) =>{
        const url = answer.link;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));

        fs.writeFile("URL.txt", url, (err) => {
              if (err) throw err;
              console.log("The file has been saved!");
        });
    })
    
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Can't render prompt here.");
        } else {
            console.error("Error:", error);
        }
    });
