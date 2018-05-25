import express from 'express';

const router = express.Router();

// Define the home page route
router.get('/', function (req, res) {
    res.send("Hello");
});


export default router;