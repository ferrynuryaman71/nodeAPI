const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nodeAPI', 
{useNewUrlParser: true})

mongoose.Promise = global.Promise;

module.exports = {mongoose};

//mongodb://node-api:node-api@node-rest-shop-shard-00-00-7bbwl.mongodb.net:27017,node-rest-shop-shard-00-01-7bbwl.mongodb.net:27017,node-rest-shop-shard-00-02-7bbwl.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true