const router = require('express').Router();

router.get('/', function (req, res) {
    res.render('layouts/create');
});

module.exports = router;