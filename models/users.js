const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        // validate: {
        //     validator: function(v) {
        //         return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid email!`
        // },
        required: [true, 'User email is required']
        
    },
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