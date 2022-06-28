//Basic CRUD app with MERN *ONLY*
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const apiRouter = require('./routes/api');
const adminRouter = require('./routes/admin');

app.use('/api', apiRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
    res.status(200).send("Updated iWall Server is Up & Running!")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});