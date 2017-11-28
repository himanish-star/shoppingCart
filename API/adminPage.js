/*
handles addition and deletion of items to the home page
*/

const route = require("express").Router();
const models= require("../Database/models").models;
const fs =require("fs");

route.get('/',(req,res,next)=>{
    res.sendFile('/home/soumya/WebstormProjects/ShoppingCart/Frontend/adminPage.html');
});

route.post('/insert',(req,res,next)=>{
    let id=null;
    let productObj={
        pname:req.body.productObj.pname,
        pprice:req.body.productObj.pprice
    };
    models.product.create(productObj,(result)=>{
        // console.log(result.ops[0].pname+" "+result.ops[0].pprice);
        // console.log(result);
        id=result.ops[0]._id;
        let fileData={
            id,
            imageLink:req.body.productObj.imageLink
        };
        fs.open('/home/soumya/WebstormProjects/ShoppingCart/Frontend/imagesLinks.txt','a',
            (err,fd)=>{
            if(err) throw err;
            fs.appendFile(
                fd,
                JSON.stringify(fileData)+"\n",
                (err1)=>{
                    if(err1) throw err1;
                    // console.log("data written to file ");
                }
            )
        }
        );
    });

    //insertion done now redirect to the previous page
    res.redirect('.');
});

exports.route=route;