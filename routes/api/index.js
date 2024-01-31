const router = require('express').Router();

// Importing User and Thoughts routes

const user_routes = require('./userRoutes');
const thought_routes = require('./thoughtRoutes');

//Specifying endpoint for user and thought routes

router.use('/user', user_routes);
router.use('/thought', thought_routes);

module.exports = router;
