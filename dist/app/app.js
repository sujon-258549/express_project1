"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
//  madel wore use 
const varifay = (req, res, next) => {
    console.log(req.url, req.method, req.body, req.params, req.query);
    next();
};
app.get('/', varifay, (req, res) => {
    console.log(req.params);
    console.log(req.query.email);
    res.send('Hello World Sujon mia sujon!');
});
app.post('/', (req, res) => {
    res.json({
        message: "This is successfuly insert data"
    });
});
exports.default = app;
