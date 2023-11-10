//import json-server library in index.js
//require is used for import library
const jsonServer = require ('json-server')

//create server using this library 
const mediaPlayerServer =jsonServer.create()

//create a path to db.json
const router= jsonServer.router('db.json')

//middleware to convert js to json (communication)
const middleware= jsonServer.defaults()

//coneect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)



//setup port for json server otherwise frondend and backend server will clash
const port = 5001 || process.env.PORT     //process.env.PORTis used for choose another port while host the site if 4000 is not available

//monitoring the port 
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for the request`);
})