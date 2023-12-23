const mongoose = require('mongoose');

// Replace 'your_connection_string' with the actual connection string from MongoDB Atlas
const connectionString = "mongodb+srv://pratyanch_mongodb:a6O4zJdJWFlT2fGD@cluster0.tl16mpu.mongodb.net/pratyanch_database_1?retryWrites=true&w=majority";

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB Atlas!');

  // Specify the database name and collection name
  const dbName = 'pratyanch_database_1';
  const collectionName = 'pd_coll1';

  // Define a Mongoose schema for the 'pd_coll1' collection
  const pdColl1Schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
  });

  // Create a Mongoose model based on the schema, specifying the collection name
  const PdColl1Model = mongoose.model('PdColl1', pdColl1Schema, collectionName);

  // Create new documents with sample data
  const documents = [
    { name: 'Person1', age: 30, email: 'person1@example.com' },
    { name: 'Person2', age: 25, email: 'person2@example.com' },
    { name: 'Person3', age: 35, email: 'person3@example.com' },
  ];

  try {
    // Insert documents into the specified collection
    const result = await PdColl1Model.insertMany(documents);
    console.log('Documents inserted successfully:', result);

    // Query the specified collection and log the result
    const queryResult = await PdColl1Model.find();
    console.log('Data retrieved from the database:', queryResult);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    // Close the Mongoose connection when done
    mongoose.connection.close();
  }
});