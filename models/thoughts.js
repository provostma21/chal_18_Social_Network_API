const { Schema, model } =require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            // type: Mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            // Default value set to new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        // createdAt: {
        //     Type: Date,
        //     default: () => Date.now(),
        //     // Use getter method to format timestamp on query
        },
    // }
);


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
            ref: 'users',
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Set default calue to current timestamp
            // Use getter method to format timestamp on query
        },
        username: {
            type: String,
            required: true,
            ref: 'users',
        },
        reactions: [reactionSchema],
            // Array of nested documents created with reactionSchema
            // reactionCount retrieves length of thought's reaction array field on query
        
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = reactionSchema;
module.exports = Thought;