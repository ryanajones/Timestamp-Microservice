const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/api/timestamp/:time?", (req, res) => {
  const date = isNaN(req.params.time)? req.params.time: parseInt(req.params.time)
  const unix = date ? new Date(date).getTime(): new Date().getTime();
  const utc = date ? new Date(date).toUTCString(): new Date().toUTCString();
  const validOrNot = unix? true: false; 
  if (validOrNot) {
    res.json({
      "unix": unix,
      "utc": utc
    })
  } else { 
    res.json({
      "error": "Invalid Date"   
    })
  } 
})

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
