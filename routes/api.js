const router = require('express').Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

router.get('/notes', (req, res) => {

  console.log("Anything");
  fs.readFile("./db/db.json","utf8", (err,data)=>{
    if (err){ console.log(err)}
    res.json(JSON.parse(data))
 })
});


router.post('/notes', (req, res) =>{
  console.log(req.body)
  let newNote = req.body
  newNote.id = uuidv4();
  fs.readFile("./db/db.json","utf8", (err,data)=>{
    if (err){ console.log(err)}
    let noteArray = JSON.parse(data)
    noteArray.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(noteArray), (err) =>{
      if (err){ console.log(err)}});

    
 })
 res.json(newNote)
});





module.exports = router;