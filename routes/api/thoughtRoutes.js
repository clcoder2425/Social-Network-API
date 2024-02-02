// Importing express, router and thought controller
const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');

// Routes for handling thoughts
router.route('/')
  .get(thoughtController.getAllThoughts)
  .post(thoughtController.createThought);

router.route('/:thoughtId')
  .get(thoughtController.getThoughtsById)
  .put(thoughtController.updateThoughtById)
  .delete(thoughtController.deleteThought);

// Routes for handling reactions
router.route('/:thoughtId/reactions')
  .post(thoughtController.createReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(thoughtController.deleteReaction);

module.exports = router;
