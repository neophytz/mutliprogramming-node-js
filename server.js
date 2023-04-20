const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// const upload = multer({dest:"./public"});

const upload = require('./upload.js');

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.status(200).json({
        status:"working",
        live:true
    })
})

app.post('/upload', upload.single('image'),
 (req, res) => {
    if(req.file.mimetype ==='image/png'){
        console.log(req.file);
        return res.status(200).json({
            message:"Upload Successful"
        })
    }
    else{
        return res.status(500).json({
            message:`${req.file.mimetype} is not acceptable`
        })
    }
})

app.listen(8080, ()=>{
    console.log(`Server started at http://localhost:8080`)
})

