const express=require('express')
const app=express()

app.set('view engine', 'ejs')


app.get("/", (req, res, next)=>
{
    console.log("Here")
// res.download("server.js")
    // res.status(207).send("Aya?")
    // res.json({message:"error"})
    res.render("index", {text: "world"})
})



app.listen(3000)