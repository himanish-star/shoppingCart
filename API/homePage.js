
const route=require("express").Router();
const path= require("path");
let models=require("../Database/models").models;
const fs = require("fs");

route.get('/details',(req,res,next)=>{
    models.product.read((listOfProducts)=>{
        let newListOfProducts=[];
        fs.open("/home/soumya/WebstormProjects/ShoppingCart/Frontend/imagesLinks.txt",'r',
            (err,fd)=> {
                if (err) throw err;
                let lines=null;
                fs.readFile(fd,(err,data)=>{
                    if(err) throw err;
                    lines=data.toString().split('\n');
                    lines.pop();
                    // console.log(lines);
                    for(let i in lines){
                        let jsonData=JSON.parse(lines[i]);
                        for(let product of listOfProducts){
                            // console.log(product);
                            // console.log(jsonData.id);
                            // console.log(product._id);
                            if(jsonData.id.toString()===product._id.toString()) {
                                newListOfProducts.push({
                                    imageLink:jsonData.imageLink,
                                    pname:product.pname,
                                    pprice:product.pprice
                                })
                            }

                        }
                    }
                    // console.log(newListOfProducts);
                    res.send(newListOfProducts);
                });
            }
        );

    })
});

route.get('/cart',(req,res,next)=>{
    res.sendFile("/home/soumya/WebstormProjects/ShoppingCart/Frontend/viewCartPage.html");
});

route.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../Frontend/homePage.html"));
});



exports.route=route;