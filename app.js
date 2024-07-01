const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5500;


const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to database'))
    .catch(err => console.log('Could not connect to database ', err))



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})