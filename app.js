const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 80;

//EXPRESS RELATED STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//PUG RELATED STUFF
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
//END POINTS
app.get("/", (req, res) => {
  const con = "This is the best content so far";
  const params = { title: " Welcome to fitpro gym", content: con };
  res.status(200).render("index.pug", params);
});
app.post("/", (req, res) => {
  // console.log(req.body);
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;

  let outputtowrite = `The details of client is ${name}, ${age} years  old, ${gender} residing at ${address}, More about him/her: ${more}`;
  fs.writeFileSync("output.txt", outputtowrite);
  const params = {
    message: "Your form is submitted succesfully",
  };
  res.status(200).render("index.pug", params);
});

//START THE SERVER
app.listen(port, () => {
  console.log(`the app started on ${port}`);
});

// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', { title: 'Hey Jordan', message: 'Hello there! thank you to make me understand how to us pug' })
// });

// app.get("/", (req, res)=>{
//     res.send("This is home page of my first app with harry");
// });
// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first app with harry");
// });
// app.get("/services", (req, res)=>{
//     res.send("This is services page of my first app with harry");
// });
