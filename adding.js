const{MongoClient}=
require('mongodb');

const url='mongodb://localhost:27017/';
const client=new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology:true});
async function run(){
try
{
await client.connect();
console.log("connected sucsessfully to MongoDB");

const database=client.db('priya');
const collection=database.collection('marks');
const doc=
{
  "_id": "5",
  "name": "sakshi",
  "mark1": "88",
  "mark2": "77",
  "mark3": "100"
};
const result= await
collection.insertOne(doc);
console.log(`a document was inserted with the_id:${result.insetionID}`);
}finally{
await client.close();
}
}
run().catch(console.dir);

