const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routs/auth');
const stuffRoute = require('./routs/newstuff');


dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
);

app.use(express.json());

//route middleware
app.use('/api/user', authRoute);
app.use('/api/user', stuffRoute);

app.listen(3000, () => console.log("Server up and running"));