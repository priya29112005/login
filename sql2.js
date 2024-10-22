const{MongoClient}=
require('mongodb');
const url="mongodb://localhost:27017/";
const client=new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology:true});
async function run(){
try
{
await client.connect();
console.log("connected sucsessfully to MongoDB");

const database=client.db('local');
const collection=database.collection('Books');

 
const query={Bookname:"spiritualbooks"};
const document=await
collection.findOne(query);
console.log(document);

const updateDoc={
$set:{
price: "400",
},
};

const updateresult=await
collection.updateOne(query,updateDoc);
console.log("matched ${updatedResult.matchedCount}document(s)and modified ${updateResult.modifiedCount}document(s)");

const query1={Bookname:"storybooks"};
const deleteResult=await
collection.deleteOne(query1);
console.log("deleted ${deletedResult.deleteCount}document(s)");
}finally{
await client.close();
}
}
run().catch(console.dir);
