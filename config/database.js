const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect("mongodb://localhost:27017/finalyearproject", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    }).then((data) => {
        console.log(`mongodb connected with server ${data.connection.host}`);
    })

}


module.exports = connectDatabase