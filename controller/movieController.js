const Movie = require('../models/movie');

exports.getMovies = async (req, res) => {

    const movies = await Movie.find();

    res.render('movies', { movies });

};

exports.getAddMovie = (req, res) => {

    res.render('addMovie');
};

exports.postAddMovie = async (req, res) => {

    const movie = new Movie({

        title: req.body.title,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
        genre: req.body.genre,
        rating: req.body.rating,
        poster: req.file.filename

    });
    await movie.save();

    res.redirect('/movies');
};

exports.getEditMovie = async (req, res) => {

    const movie = await Movie.findById(req.params.id);

    res.render('editMovie', { movie });
};

exports.postUpdateMovie = async (req, res) => {

    const movie = await Movie.findById(req.params.id);

    movie.title = req.body.title;
    movie.description = req.body.description;
    movie.releaseDate = req.body.releaseDate;
    movie.genre = req.body.genre;
    movie.rating = req.body.rating;

    if (req.file) {
        movie.poster = req.file.filename;
    }
    await movie.save();
    res.redirect('/movies');
};

exports.getDeleteMovie = async (req, res) => {

    await Movie.findByIdAndDelete(req.params.id);

    res.redirect('/movies');
};
