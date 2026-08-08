const express = require("express");
const app = express();
const form = require("./routes/form.js");
const port = 4000;
app.use('/form',form)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})