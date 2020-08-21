let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
const path = require("path")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  //extended: false
  extended: true
})); 

app.use(express.static("front-end/tv_series/build"));
// index.html for all page routes
app.get("/", (req, res) => {
   res.sendFile(path.resolve(__dirname, "../front-end/tv_series/", "build", "index.html"));
});
// Express Routes
const searchRoute = require('./routes/search');
app.use('/', searchRoute);

// PORT 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})




