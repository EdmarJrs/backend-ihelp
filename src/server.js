const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bp = require("body-parser");
const cors = require("cors");
require('dotenv/config');

const app = express();

mongoose.connect(
  'mongodb+srv://leogonzaga:bloodhelp@omnistack-ekd7k.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(bp.json());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor online!");
});
