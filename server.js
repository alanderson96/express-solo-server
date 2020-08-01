// 1.Create a Node Package
// 2.Install Express
// 3.Create an Entry Point file in your Package
// 4.Within the Entry Point write code that configures and launches a simple Express server
// 5.Using Express Middleware enable access to Static files
// 6.Typically, this Middleware points to a ‘Public’ folder within your Package
// 7.Add your Static Website directories and files to the ‘Public’ folder
// 8.Start your Package
// 9.Test your Web Server via your Browser
const express = require("express");
const app = express();

app.get("/",(request, response)=> {
response.send("Hello World!")
});

app.listen(3000, () => {
    console.log("Server Started!")
})

