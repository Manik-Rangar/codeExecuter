const express = require("express");
const { executeCode } = require("./codeExecuter");
const app = express();

app.listen(3000,()=>{
    console.log("server is working fine")
    executeCode()
})