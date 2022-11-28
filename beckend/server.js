const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer =require('multer');

const app = express();
app.use(express.json());
let count = 0

const storg = multer.diskStorage({
  destination: (req, file, cb)=>{
    const path1 = "./public" + req.body.path;         
    cb(null, path1)
  },
  filename:(req, file, cb)=>{
    cb(null, file.filename + '.' + file.mimetype)
  }
})
const up = multer({storg});

app.use(express.static('public'));
app.use(cors());
const port = 3002;

app.put("*:filename", (req, res) => {
  fs.rename(`./public${req.url}`, `./public/${req.body.name}`, (err, files) => {
    if(err) console.log(err);
    else{
      console.log('put file');
    }
  })
})
app.post("*:filename", (req, res) => {
  fs.copyFile(`./public${req.url}`, `./public/${req.url}(${++count})${req.body.name}`, (err, files) => {
    if(err) console.log(err);
    else{
      console.log('copy file');
    }
  })
})

app.delete("*:filename", (req, res) => {
  fs.unlink(`./public${req.url}`, (err, files) => {
    if(err) console.log(err);
    else{
      console.log('delete file');
    }
  })
})

app.post('/uplo',up.single('myFil'),)

app.get('*', (req, res) => {
  console.log(req.url);
  fs.readdir(`./public${req.url}`, (err, files) => {
    console.log(files);
    if (err) { console.log(err) }


    if (files) {
      res.send(files.map((f) => {
        let path1 = path.join(__dirname, 'public', req.url, f)
        let stats = fs.statSync(path1)
        return { name: f, isFile: stats.isFile(), stats }
      }))

    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
}); 