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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apis_1 = __importDefault(require("../controllers/apis"));
const user_1 = __importDefault(require("../model/user"));
const routes = (0, express_1.Router)();
routes.get(`/`, function (req, res) {
    res.send({
        tayyab: "123123",
        status: true
    });
});
routes.get(`/api`, function (req, res) {
    res.send({
        tayyab: "123123",
        status: true
    });
});
routes.get(`/users`, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var users = yield apis_1.default.getAllUser();
        console.log(JSON.stringify(users));
        res.send({
            users
        });
    });
});
routes.get(`/getUser`, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = req.query['id'];
        if (id == null) {
            res.send({ "error": "id required" });
            return;
        }
        var users = yield apis_1.default.getUser(id);
        console.log(JSON.stringify(users, null, 1));
        res.send({
            users
        });
    });
});
routes.post('/addUser', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var body = req.body;
        var userName = body['userName'];
        var passowrd = body['password'];
        if (userName == null) {
            res.send({
                "msg": "User Name required"
            });
            return;
        }
        if (passowrd == null) {
            res.send({
                "msg": "user Password required"
            });
            return;
        }
        var mUser = new user_1.default(userName, passowrd);
        //console.log("going to add user"+mUser.userName+" pass: "+mUser.password);
        var isAdded = yield apis_1.default.addUser(mUser);
        res.send({
            "msg": "user added"
        });
    });
});
exports.default = routes;
