const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
      Thought.find({})
        .populate({ path: 'reactions', select: '-__v'})
        .select('-__v')
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // Get a single thought
    getOneThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .populate({ path: 'reactions', select: '-__v'})
        .select('-__v')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a thought
    // createThought({params, body}, res) {
    //   Thought.create(body)
    //     .then(({ _id }) => {
    //       return User.findOneAndUpdate({ _id: body.userId}, { $push: {thoughts: _id } }, {new: true});
    //       )
    //     .then((thought) => res.json(thought))
    //     .catch((err) => {
    //       console.log(err);
    //       return res.status(500).json(err);
    //     });
    // },

    createThought({ params, body}, res) {
      Thought.create(body)
      .then(({_id}) => {
          return User.findOneAndUpdate(
              { _id: body.userId},
              {$push: {thoughts: _id.toString() } },
              { new: true }
              );
    })
          .then(() => res.json({ message: 'Thought created.'}))
          .catch((err) => res.status(500).json(err));
  },
    // Delete a thought
    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : Thought.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId} },
              { new: true }
            )
        )
        .then(() => res.json({ message: 'Thought and reactions deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a thought
    updateThought(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json({message: 'Thought updated.'})
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a reaction
    createReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true, runValidators: true}
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Delete a reaction
    deleteReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId  } } },
        { new: true},
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
};
  