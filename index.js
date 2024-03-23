const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const upload = multer();


app.set('view engine', 'ejs');

app.use(express.static("public"))

app.listen(3000, () => {
    console.log(`Server listening to 3000 port`);
})
app.use(cors({optionsSuccessStatus: 200}));

app.get('/', (req,res) =>{
    res.render('index');
});
//{"name":"Horizons v1.0.5.sav","type":"application/octet-stream","size":131072}
app.post('/api/fileanalyse', upload.single('upfile'), (req,res) => {
    const name = req.file.originalname;
    console.log(req.file);
    const type = req.file.mimetype;
    const size = req.file.size;
    res.json({name,type,size})
})