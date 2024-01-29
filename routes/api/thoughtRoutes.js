//Importing controllers and dependencies

const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// Get and port all thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Get thought by id, update and delete user by id

router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThought);

// route for Post reaction to a thought
router.route('/:thoughtId/reactions').post(createReaction);

// Delete reaction to a thought

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exporting the router
module.exports = router;