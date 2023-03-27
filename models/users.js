const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: String,
    email: String,
    thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Friends',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


const User = model('user', userSchema);

module.exports = User;