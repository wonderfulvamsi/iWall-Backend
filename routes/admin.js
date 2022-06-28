const router = require('express').Router();

let PostData = require('../models/postModel');

const checkpassword = require('../middlewares/checkpassword');

require('dotenv').config();

//get all reported posts
router.get('/allreportedposts', checkpassword, async (req, res) => {
    try {
        res.status(200).json(await PostData.find({ visible: false, resolved: false }));
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//resolve a post
router.patch('/resolve', checkpassword, async (req, res) => {
    try {
        const post = await PostData.findOne({ _id: req.body.post_id });
        res.status(200).json(await post.updateOne({
            visible: req.body.resolution,
            resolved: true
        }));
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;