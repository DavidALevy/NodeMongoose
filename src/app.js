require("./db/connection")
const yargs = require("yargs");
const { addMovie, listMovies,updateActor,deleteMovie } = require("./movie/movieMethods");
""
const app = async (args) => {
    switch (process.argv[2]) {
        case "add":
            addMovie({ title: args.title, actor: args.actor });
            break;
        case "list":
            listMovies();
            break;
        case"updateActor":  
          updateActor({title:args.title,actor:args.actor});
          break;
          case "deleteMovie":
              deleteMovie({title:args.title});
              break;        
          default:
            console.log("Incorrect command");

    }
}
app(yargs.argv);