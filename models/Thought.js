// Importing mongoose

const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            require: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleDateString(),
        },
        username: {
            type: String,
            require: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON:{
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = ('Thought', thoughtSchema)

module.exports = Thought