import { Sequelize } from 'sequelize';
import UserModel from '../model/user';

let sequelize = new Sequelize('mydb','root','Root123',{
    host: 'localhost',
    dialect : 'mysql'
});

async function connect(){
    console.log("going to connect db");
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(error){
        console.error("error in connection "+error);
    }
}

async function getAllUser():Promise<Array<any>>{
    console.log("getting all users from db");
    const users = await sequelize.query('SELECT * FROM mydb.users');
   return users[0];
}

async function getUser(id:string) :Promise<Array<any>>{
    const user = await sequelize.query("SELECT * FROM mydb.users where id="+id);
    return user[0];
}

async function  addUser(mUser:UserModel) {
    console.log("going to add user in db");
    const isAdded = await sequelize.query("INSERT INTO `mydb`.`users` (`userName`, `userPassword`) VALUES ('"+mUser.userName+"', '"+mUser.password+"')");
    return isAdded[0];
}



export default{
    connect,getAllUser,getUser,addUser
};