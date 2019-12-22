const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;
app.use(express.static(__dirname + "/public"));





const routs = require('./routs');
app.use(routs);



app.listen(PORT, () => {
  console.log("Server working");
});
