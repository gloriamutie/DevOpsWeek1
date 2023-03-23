require('dotenv').config();
var config = {}

// Update to have your correct username and password
config.mongoURI = {

    production: 'mongodb+srv://${process.env.username}:${process.env.password}@devops1.qwsflap.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://${process.env.username}:${process.env.password}@devops1.qwsflap.mongodb.net/darkroom?retryWrites=true&w=majority',
    test: 'mongodb+srv://${process.env.username}:${process.env.password}@devops1.qwsflap.mongodb.net/darkroom?retryWrites=true&w=majority',

}

module.exports = config;

