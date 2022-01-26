import express, { Application } from 'express';
import http from 'http';
import router from './routests/index';
//import apis from './controllers/apis';
import bodyparser from 'body-parser';

const app: Application = express();
const port = process.env.PORT || 30001; 
const hostname = '127.0.0.2';
// for json body parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(router);

app.listen(port,()=>{
    console.log(`Server running at http://{hostname}:${port}/`);
    //apis.connect()
});

// app.get('/',(req,res)=>{
//     res.send('welcome hamza');
// })