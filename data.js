const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGO_URL_LOCAL;
const client = new MongoClient(url);
const dbName = "cobranzaApp";


  async function main() {
    await client.connect();
    console.log("Conectado al servidor");
    const db = client.db(dbName);
    const collection = db.collection('users');
  
    const insertResult = await collection.insertOne({c: 2});
    console.log('Inserted documents =>', insertResult);
    
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    
    return "done.";
  }
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

