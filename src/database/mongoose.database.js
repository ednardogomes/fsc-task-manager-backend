const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanagercluster.m00vhg8.mongodb.net/?retryWrites=true&w=majority&appName=FscTaskManagerCluster`
    )
    .then(console.log("Connected to mongoDB!"));
};

module.exports = connectToDatabase;
