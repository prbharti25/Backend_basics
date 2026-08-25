const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// username password cluster

// picks hexadicemial value of '@' i.e. '0x40'
// @ === %40
// const url = "mongodb+srv://coderArmy9:Hunter@Bhai@codelife25.u4sszcz.mongodb.net/";
// const url = "mongodb+srv://coderArmy9:Hunter%40Bhai@codelife25.u4sszcz.mongodb.net/";


// @ == hexdecimal: 0x40          //username:           :password@   @cluster.
const url = "mongodb+srv://pushprajbharti125_db_user:MongoDB125@clusterlife125.b1ebedo.mongodb.net/";   //to connect backend with database
const client = new MongoClient(url);  //creates an instance of MongoClient

// Database Name
const dbName = 'newDB';

async function main() {

  // Use connect method to connect to the server(backend and cluster)
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName);   //To connect with Database(newDB) : it doesn't check if dbName exists in the database, so 'await' is not used
  const collection = db.collection('user');   //To connect with collection (user) : it doesn't check if collection name(user) exists in the database, so 'await' is not used

//------------------the following code examples can be pasted here...

// collection.find -> at this time it checks if collection exists or not
  const findResult =  collection.find({});   //This is CURSOR(collection.find) and it doesn't do network call but points to the documents and collection, here it checks if collection or user exists or not
  const ans = await findResult.toArray();    //.toArray does network call for us but the issue is it fetches all data at once(system pe load parta hai)

  
  // let balance = 0;

// // cursor -> ek-ek document ko laane me help karta hai(for-of loop does network call) isliye load nhi padta hai system pe
//    for await (const doc of findResult){
//     console.log(doc);
//     balance++;
//    }
  console.log('Found documents =>', ans);
  // console.log("balance: ", balance);


  // const insertResult = await collection.insertOne({name:"Surveer", age:24});  //returns an object
  // console.log('Inserted documents =>', typeof(insertResult));

  // const insertResult2 = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  // console.log('Inserted documents =>', insertResult2);

  // const filteredDocs = await collection.find({ a: 3 }).toArray();
  // console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

    const indexName = await collection.createIndex({ a: 1 });
    console.log('index name =', indexName);


  // const deleteResult = await collection.deleteMany({a:2});
  // console.log('Deleted documnts =>', deleteResult);       

    return 'done.'; 
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



// What if Database doesn't exist, what will happen: Will it create DB for you or throw an error
// What if Collection name doesn't exist: what will happen: Will it create collection for you or throw an error
// mongoDB125 -> password
