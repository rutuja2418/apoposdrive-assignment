require("dotenv").config();
const express = require("express");
const app = express();

// database config
require("./db/config")

const router = require("./routes/router")
const cors = require("cors")

const port = 5000

app.use(cors());

// for post data
app.use(express.json());

app.use(router);

app.listen(port, ()=> {
    console.log(`server is running at port ${port}`)
});