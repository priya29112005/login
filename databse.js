const {MongoClient}=
require('mongodb');

const url='mongodb://localhost:27017/';
const client=new MongoClient(url);

const dbname='priya';
async function main()
{
await client.connect();
console.log('connected successfully to server');

const db=client.db(dbname);
console.log(`database ${dbname} created`);

await client.close();
}
main().catch(console.error);

