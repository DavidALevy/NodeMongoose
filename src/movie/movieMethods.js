const Movie= require("./movieModels")
exports.addMovie=async (movieOb)=>{
    try{
        const movie=await new Movie(movieOb);
        await movie.save();
        console.log(`Successfully added ${movie.title}`)
    }catch (error){
        console.log(error);
    }
}
exports.listMovies=async()=>{
    try{
        console.log(await Movie.find({}));
    }catch(error){
        console.log(error)
    }
};
exports.updateActor=async(movieOb,movieActor)=>{
    try{
await Movie.updateOne(movieOb,
    movieActor) 
    console.log(`${movieOb.title} has updated "actor" to ${movieOb.actor}` )   
}
    catch(error){        
        console.log(error);}
    };

exports.deleteMovie=async(movieOb)=>{
    try{
await Movie.deleteOne(movieOb)
console.log(`${movieOb.title} has been deleted.`)
    }catch(error){
        console.log(error);
    }
};