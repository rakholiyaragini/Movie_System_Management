const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
const port = 3000;
const mongoose = require('mongoose');

const db = require('./config/db')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/movies');
});
app.use('/', movieRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
