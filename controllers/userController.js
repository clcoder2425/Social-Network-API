//Importing user model

const {User} = require ('../models');

const user_Controller = {
    // Get all users
    getAllUsers(req, res){
        User.find({})
        .then(userInf => res.json(userInf))
        .catch(err => res.status (500).json(err));
    },
    // Get user by ID

    getUserById(req, res){
        User.findById(req.params.userId)
        .then (userInf => res.json(userInf))
        .catch( err => res.status(500).json(err));
    },

    // Create a user
    createUser(req, res){
        User.create(req.body)
        .then(userInf => res.json(userInf))
        .catch(err => res.status(500).json(err));
    },

    // Update user by ID

    updateUserById(req, res){
        User.findOneAndUpdate(res.params.id, req.body, {new: true})
        .then(userInf => {
            if(!userInf){
                return res.status (404).json({message: 'User not found'});
            }
            res.json(userInf);
        })
        .catch(err => res.status(500).json(err));
    },

    // Delete user

    deleteUserById(req, res){
        User.findOneAndDelete(req.params.id)
        .then(userInf => {
            if(!usrInf){
                return res.status(404).json({message: 'User not found'});
            }
            res.json({message: 'User deleted successfully'});
        })
        .catch(err => res.status(500).json(err));
    },

    //Add a friend to user's friend list
    addFriend(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.body.riendId || req.params.friendId}},
            {new: true}
        )
        .then(userInf => {
            if (!userInf){
                return res.status(404).json({message: 'Usr not found'});
            }
            res.json(userInf);
        })
        .catch(err => res.status(500). json(err));
    },
    // Remove a friend from usr's friend list
    removeFriend({params}, res){
        User.findOneAndUpdate(
            {_id: params.userId},
            { $pull: {friends: params.friendId}},
            {new: true}
        )
        .then((dbUserInf) => {
            if(!dbUser){
                return res.status(404).json({message: "no user with this id has been found"});
            }

        })
    }

}