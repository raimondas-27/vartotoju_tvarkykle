const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersItemSchema = new Schema(
    {
       name: {
          type: String,
          required: true,
       },
       age: {
          type: Number,
          required: true,
       },
       email: {
          type: String,
          required: true,
       },
       password: {
          type: String,
          required: true,
       }
    },
    {timestamps: true}
);

const UsersItem = mongoose.model('users', usersItemSchema);

module.exports = UsersItem;