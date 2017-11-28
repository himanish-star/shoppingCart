let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/ShoppingCart";

let productCollection=null;

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Connected to the mongodb server");
    productCollection=db.collection('productCollection');
});

let product={
    create:
        (productObject,callback)=>{
        productCollection.insertOne(
            productObject,
            (err,result)=>{
                if(err) throw err;
                callback(result)
            }
        );
    },
    read:
        (callback)=>{
        productCollection.find({}).toArray((err,docs)=>{
            if(err) throw err;
            callback(docs);
        })
        }
};

exports.models={
    product
};