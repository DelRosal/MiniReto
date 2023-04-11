const express= require("express");
const PORT= process.env.PORT || 3001;
const app=express();
const fs= require("fs");

app.listen(PORT,() =>{
    console.log(`Server listening on ${PORT}`);
});

app.get("/hello", (req, res) => {
    res.json ({message: "Hello World :)"});
});

app.get("/menu", (req,res) =>{
    fs.readFile(__dirname + "/"+ "users.json", "utf-8", (err,data) =>{
        console.log(data);
        res.end(data);
    });
});

