const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = mongoose.Schema({
    email: {
        type:String, required:true ,unique: true
    },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);