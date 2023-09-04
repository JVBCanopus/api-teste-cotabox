const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    participation: {
        type: Number,
        required: true,
    },
},
    { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
