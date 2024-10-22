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

 const query={Bookname:"storybooks"};
const document=await
collection.findOne(query);

console.log(document);
}
finally{
await client.close();
}
}
run().catch(console.dir);