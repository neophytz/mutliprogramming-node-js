const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const os = require('os');
const cluster = require('cluster')

if(cluster.isMaster){
    const nCPUs = os.cpus().length;
    console.log(nCPUs);

    for(var i=0; i<nCPUs; i++){
        cluster.fork(); // seperate servers
    }
}

else{
    const app = express();
    app.use(bodyParser.json())
    app.use(cors())
    
    app.get('/', (req, res) => {
        return res.status(200).json({
            status:"working",
            live:true
        })
    })
    
    app.listen(8080, ()=>{
        console.log(`Server started at http://localhost:8080`)
    })
}

