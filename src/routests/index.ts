import { Router } from 'express';
import apis from '../controllers/apis';
import UserModel from '../model/user';
const routes = Router();


routes.get(`/`,function (req, res) {
    res.send({
        tayyab: "123123",
        status: true
    })
})

routes.get(`/api`,function (req, res) {
    res.send({
        tayyab: "123123",
        status: true
    })
})

routes.get(`/users`,async function (req, res) {
    var users =await apis.getAllUser();
    console.log(JSON.stringify(users));
    res.send({
        users
    })
})


routes.get(`/getUser`,async function (req, res) {
    var id = req.query['id'];
    if(id == null){
        res.send({"error":"id required"});
        return;
    }
    var users =await apis.getUser(id as string);
    console.log(JSON.stringify(users, null, 1));
    res.send({
        users
    })
})

routes.post('/addUser',async function (req,res) {
    var body = req.body;
    var userName = body['userName'];
    var passowrd = body['password'];

    if(userName == null){
        res.send({
            "msg":"User Name required"
        })
        return;
    }

    if(passowrd == null){
        res.send({
            "msg":"user Password required"
        })
        return;
    }
    
     var mUser = new UserModel(userName,passowrd);
    //console.log("going to add user"+mUser.userName+" pass: "+mUser.password);
    var isAdded = await apis.addUser(mUser);
    res.send({
        "msg":"user added"
    })
})

export default routes; 