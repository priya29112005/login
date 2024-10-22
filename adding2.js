
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
[{
  "_id": "102",
  "name": "shreyas",
  "mark1": "99",
  "mark2": "99",
  "mark3": "100"
},
{
  "_id": "103",
  "name": "riya",
  "mark1": "79",
  "mark2": "99",
  "mark3": "80"
},
{
  "_id": "104",
  "name": "nisha",
  "mark1": "69",
  "mark2": "69",
  "mark3": "70"
},
{
  "_id": "105",
  "name": "shree",
  "mark1": "69",
  "mark2": "89",
  "mark3": "90"
},
{
  "_id": "106",
  "name": "ani",
  "mark1": "89",
  "mark2": "99",
  "mark3": "90"
},];
const result=await
collection.insertMany(doc);
console.log(`a document was inserted with the_id:${result.insetionID}`);
}finally{
await client.close();
}
}
run().catch(console.dir);
