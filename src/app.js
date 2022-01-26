const express = require('express')

const app = express();
const port = process.env.PORT || 30001; 
const hostname = '127.0.0.2';

app.listen(port,()=>{
    console.log(`Server running at http://{hostname}:${port}/`);
    //apis.connect()
});

app.get('/', (req, res) => res.send('Hello World!'))