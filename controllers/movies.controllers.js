export const MovieIndex = (req, res) => {
    res.send("Getting all movie list")
}
 
export const MovieCreate = (req, res) => {
    res.send("Create a movie....")
}

export const MovieUpdate = (req, res) => { 
    res.send("Updating particular a movie")
}

export const MovieDelete =  (req, res) => {
    res.send("deleting particular a movie in the list")
 }