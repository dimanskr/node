const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'test';

const findObj = (col, client) => {
  return new Promise ((resolve, reject) => {
    col.find({}).toArray((err, res) => {
      assert.equal(err, null);
      if (res.length > 0) {
        console.log(res);
        resolve(res);
        client.close();
      } else {
        reject(console.log('something went wrong'));
      }
    });
  });
};

MongoClient.connect(url, async (err, client) => {
  try {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    const collect = db.collection('tasks');

    const dump = await findObj(collect, client);
    
  } catch(e) {
    console.error(e.message);
  }
});

