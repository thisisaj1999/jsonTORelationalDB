const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

// server routes
router.post('/', (req, res) => {
    homeController(req, res);
});

module.exports = router;