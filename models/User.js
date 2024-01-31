// Importing dependency from mongoose library
const {Schema, model, Types} = require ('mongoose');

// Schema specification

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true,
        },
        // Validating email format  using regex 
        email: {
            type: String,
            require: true,
            unique: true,
            validate: {
                validator: function(valid){
                    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(valid);
                }
            }
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],

    },
    {
        toJSON: {
            virtuals: true, // enabling virtual properties 
        },
        id: false,
    }
);

// Creating virtuals properties for friendCount

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});
//Creating User model from the userSchema
const User = model('User',userSchema)

module.exports = User
