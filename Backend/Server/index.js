const miniReto= require("miniReto");
const PORT= process.env.PORT || 3001;
const app=miniReto();

app.listen(POORT,() =>{
    console.log(`Server listening on ${PORT}`);
});