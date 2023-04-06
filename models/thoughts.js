const { Schema, model, Types } =require('mongoose');

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
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
             // Use getter method to format timestamp on query
            getters: true,
        },
        id: false,
    }
);


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            // Set default calue to current timestamp
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        // Array of nested documents created with reactionSchema
        reactions: [reactionSchema],

        
    },
    {
        toJSON: {
            virtuals: true,
             // Use getter method to format timestamp on query
            getters: true,
        },
        id: false,
    }
);

 // reactionCount retrieves length of thought's reaction array field on query
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = reactionSchema;
module.exports = Thought;