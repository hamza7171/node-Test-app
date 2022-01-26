"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
let sequelize = new sequelize_1.Sequelize('mydb', 'root', 'Root123', {
    host: 'localhost',
    dialect: 'mysql'
});
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("going to connect db");
        try {
            yield sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error("error in connection " + error);
        }
    });
}
function getAllUser() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("getting all users from db");
        const users = yield sequelize.query('SELECT * FROM mydb.users');
        return users[0];
    });
}
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield sequelize.query("SELECT * FROM mydb.users where id=" + id);
        return user[0];
    });
}
function addUser(mUser) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("going to add user in db");
        const isAdded = yield sequelize.query("INSERT INTO `mydb`.`users` (`userName`, `userPassword`) VALUES ('" + mUser.userName + "', '" + mUser.password + "')");
        return isAdded[0];
    });
}
exports.default = {
    connect, getAllUser, getUser, addUser
};
