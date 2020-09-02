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
  const date = req.params.time;
  const unix = date ? new Date(date).getTime(): new Date().getTime();
  const utc = date ? new Date(date).toUTCString(): new Date().toUTCString();
  const invalid = unix? true: false;

  if (invalid) {
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

const listener = app.listen(3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
