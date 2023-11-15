"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parser 
app.use(express_1.default.json());
app.use(express_1.default.text());
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.hostname, req.method);
    next();
};
// router 
const useRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// requested path
app.use('/api/v1/users', useRouter);
app.use('/api/v1/course', courseRouter);
//requested method in user Router
useRouter.get('/create-users', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'successfuly user Information loaded',
        user
    });
});
// requested method in coursed router
courseRouter.post('/developmentCourse', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'course post successfully',
        course
    });
});
app.get('/', logger, (req, res, next) => {
    ///error handeling 
    try {
        res.send('Ali Mohammad Sohel Rana ');
    }
    catch (error) {
        next(error);
    }
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: 'successfully recivied data'
    });
});
// golbal any types of error handeling 
app.all('*', (req, res) => {
    res.json({
        success: false,
        message: 'Route Not Found'
    });
});
//global error handeling process 
app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({
            success: false,
            message: 'Something went Wrong',
            error
        });
    }
});
exports.default = app;
