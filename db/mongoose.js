const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://node-api:node-api@node-rest-shop-shard-00-00-7bbwl.mongodb.net:27017,node-rest-shop-shard-00-01-7bbwl.mongodb.net:27017,node-rest-shop-shard-00-02-7bbwl.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true', 
{useNewUrlParser: true})

module.exports = {mongoose};