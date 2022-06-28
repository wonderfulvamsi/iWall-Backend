const router = require('express').Router();

let PostData = require('../models/postModel');

require('dotenv').config();

//get all visible posts
router.get('/allposts', async (req, res) => {
    try {
        res.status(200).json(await PostData.find({ visible: true }));
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//create a post
router.post('/createpost', async (req, res) => {
    try {
        const newpost = new PostData({
            author: req.body.author,
            msg: req.body.msg,
            wall_type: req.body.wall_type
        });
        res.status(200).json(await newpost.save())
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//report a post
router.patch('/report', async (req, res) => {
    try {
        const post = await PostData.findOne({ _id: req.body.post_id });
        res.status(200).json(await post.updateOne({
            visible: false,
            reason_to_report: req.body.reason_to_report
        }));
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//like a post
router.patch('/like', async (req, res) => {
    try {
        const post = await PostData.findOne({ _id: req.body.post_id });
        res.status(200).json(await post.updateOne({
            likes: post.likes + 1
        }));
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;