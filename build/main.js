"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routests/index"));
//import apis from './controllers/apis';
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 30001;
const hostname = '127.0.0.2';
// for json body parsing
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(index_1.default);
app.listen(port, () => {
    console.log(`Server running at http://{hostname}:${port}/`);
    //apis.connect()
});
// app.get('/',(req,res)=>{
//     res.send('welcome hamza');
// })
