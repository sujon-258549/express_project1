"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
// Create Router 
const userRouter = express_1.default.Router();
const userPostData = express_1.default.Router();
// most use router
app.use('/user/v1/create-user', userRouter);
app.use('/user/v1/create-post', userPostData);
// app.use('/user/v1/create-user', userRouter)
userRouter.get('', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        success: true,
        messsage: 'user create is success',
        data: data
    });
});
// app.use('/user/v1/create-post', userPostData)
userPostData.post('', (req, res) => {
    const result = req.body;
    res.json({
        success: true,
        message: "Post Create is success",
        data: result
    });
});
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
