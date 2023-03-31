const { Schema, model } =require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // length: 1-280
        },
        createdAt: {
            // Date:
            // Set default calue to current timestamp
            // Use getter method to format timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            // Array of nested documents created with reactionSchema
            // reactionCount retrieves length of though's reaction array field on query
        },
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;