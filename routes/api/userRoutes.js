//Importing controllers and dependencies

const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// Get and port all users
router.route('/').get(getAllUsers).post(createUser);

// Get user by id, update and delete user by id

router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// Post to add a friend and delete remove friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// Exporting the router
module.exports = router;