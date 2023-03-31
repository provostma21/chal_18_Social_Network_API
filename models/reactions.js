const { Schema } =require('mongoose');

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
            Type: Date,
            default: Date.now,
            // Use getter method to format timestamp on query
        },
    }
);

// Not a model, will be used as the reaction field's subdocument schema in the Thought model

module.exports = reactionSchema;