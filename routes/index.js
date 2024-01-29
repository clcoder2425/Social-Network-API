const router = require('express').Router();
const api_Routes = require('./api');

router.use('/api', api_Routes);
router.use((req, res) => {
    return res.status(404).send('Not found');
});

module.exports = router;