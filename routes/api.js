const router = require('express').Router();
const fs = require("fs");

router.get('/notes', (req, res) => {

  console.log("Anything");
  fs.readFile("./db/db.json","utf8", (err,data)=>{
    if (err){ console.log(err)}
    res.json(JSON.parse(data))
 })
});


router.post('/notes', (req, res) =>{
  console.log(req.body)
});







module.exports = router;