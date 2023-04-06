require('dotenv').config();
var config = {}

// Update to have your correct username and password
config.mongoURI = {

    production: `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.dey3s.mongodb.net/darkroom?retryWrites=true&w=majority`,
    development: `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.dey3s.mongodb.net/darkroom_dev?retryWrites=true&w=majority`,
    test: `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.dey3s.mongodb.net/darkroom_test?retryWrites=true&w=majority`,

}
module.exports = config;

