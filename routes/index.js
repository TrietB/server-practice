const { sendResponse, AppError}=require("../helpers/utils.js")
var express = require('express');
var router = express.Router();
const fooRouter = require("./foo.api.js")
const booRouter = require('./boo.api')

/* GET home page. */
router.get('/', function(req, res, next) {
 res.status(200).send("Welcome to coderSchool");
});

router.use("/foo",fooRouter)
router.use('/boo',booRouter)

router.get("/template/:test", async(req,res,next)=>{
    const {test} = req.params
    try{
        if(test==="error"){
            throw new AppError(401, "Access Denied", "Authentication Error")
        } else{
            sendResponse(res,200,true,{data:"template"},null,"template success")
        }
    } catch(error){
        next(error)
    }
})

module.exports = router;
