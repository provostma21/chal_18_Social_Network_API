const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
      User.find({})
        .populate({ path: 'thoughts'})
        .populate({ path: 'friends'})
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getOneUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .populate({ path: 'friends'})
        .populate({ path: 'thoughts', populate: { path: 'reactions'}})
        .select('-__v')
        .then((users) =>
          !users
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(users)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a user
    createUser({body}, res) {
      User.create(body)
        .then(() => res.json({ message: 'User created.'}))
        .catch((err) => res.status(500).json(err));
  },
    // Delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: 'User and thoughts deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.friendId } },
        { runValidators: true, new: true }        
      )
      .then((user) =>
      !user
        ? res.status(404).json({ message: "No user with this id!"})
        : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends:  req.params.friendId  } },
      )
      .then((user) =>
        !user
          ? res.status(404).json( { message: "No friend with this is!" })
          : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    },
  };