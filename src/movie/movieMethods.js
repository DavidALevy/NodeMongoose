const mongoose = require("mongoose");

const Movie = require("./movieModels")

exports.addMovie = async (movieOb) => {
    try {
        const movie = await new Movie(movieOb);
        await movie.save();
        console.log(`Successfully added ${movie.title}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
}
exports.listMovies = async () => {
    try {
        console.log(await Movie.find({}));
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
};
exports.findMovie = async (dataOb) => {
    try {
        console.log(await Movie.find(dataOb))
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};
exports.updateActor = async (movieOb, updateActor) => {
    try {
        await Movie.updateOne(movieOb,
            updateActor)
        console.log(`${movieOb.title} has updated "actor" to ${movieOb.actor}`)
        mongoose.connection.close();
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateRating = async (movieOb, updatedRating) => {
    try {
        await Movie.updateOne(movieOb,
            updatedRating)
        console.log(`${movieOb.title} has updated "rating" to ${updatedRating.rating}`);
        mongoose.connection.close();
    }
    catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieOb) => {
    try {
        await Movie.deleteOne(movieOb)
        console.log(`${movieOb.title} has been deleted.`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};