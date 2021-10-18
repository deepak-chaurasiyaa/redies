const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/redis",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndexx:true,
        useFindAndModify:true,
    })
};

module.exports = connect;