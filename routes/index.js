//Importing express router
const router = require('express').Router();
//Importing API routes from './api'
const api_Routes = require('./api');

router.use('/api',api_Routes);
router.use((_req, res) => {
    return res.status(404).send('Not found');
});
//Exporting router
module.exports = router;