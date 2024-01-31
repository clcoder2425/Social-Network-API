const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// Routes for handling users
router.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route('/:userId')
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteUserById);

// Routes for handling friends
router.route('/:userId/friends/:friendId')
  .post(userController.addFriend)
  .delete(userController.removeFriend);

module.exports = router;
