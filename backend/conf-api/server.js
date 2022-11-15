const express = require('express')
const users = require("./v1/api/users");
const { load } = require('./db')
const app = express()
const port = 3000

app.use(express.json());
app.use("/api/v1/users", users);
load(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

})
