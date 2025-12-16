const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json())
app.listen(5000, (err) => {
    if (err) {
        console.log("error occured");
    }
    else {
        console.log("server is running on port number 5000");
    }
})