const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: { type: String, required: true },
    msg: { type: String, required: true },
    visible: { type: Boolean, default: true },
    likes: { type: Number, default: 0 },
    wall_type: { type: String, required: true },
    reported: { type: Boolean, default: false },
    resolved: { type: Boolean, default: false },
    reason_to_report: { type: String, default: "No perticular reason" },
}
);


const PostData = mongoose.model('PostData', postSchema)

module.exports = PostData;