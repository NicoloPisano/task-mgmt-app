const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'database';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('tasks');

    const insertResult = await collection.insertOne(
        { title: 'Write query',
        name:'query for ...',
        description:'....',
        notes:'something',
        isInstance: false,
        subtasks:[],
        beforeTasks:[],
        nextTasks:[],
        defaultDuration: 60,
        duration: 60,
        isActive: true,
        tips: [],
        links:[],
        status: 1,
        startDateTime: new Date("2020-05-18T14:10:30Z") ,
        endDateTime: new Date("2020-05-18T14:10:30Z") ,
        motherTask:'62af43d83440288e423e85d0',
        maintainer: '62af43d83440288e423e85d3'}
    );
    console.log('Inserted documents =>', insertResult);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());