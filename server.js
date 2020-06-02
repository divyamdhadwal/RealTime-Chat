var express = require ('express')
var bodyParser = require ('body-parser')
var app = express()

/*
    #SOCKET.IO setup on the SERVER#
    Create a HTTP server and:
    1. Serve the express app to the server.
    2. Import the socket-io library and pass the reference to http server.
*/
var http = require ('http').Server(app)
var io = require ('socket.io')(http)

//Data object at the server:
var messages = [
    
]

//Serve the index page when the server is called:
app.use(express.static(__dirname))

//Express has no built in support to parse the request's body
//.json tells the body parser know that we expect JSON data to be coming in with our HTTP POST request.
app.use(bodyParser.json())

//Decodes the data sent by the client during a POST request.
app.use(bodyParser.urlencoded({extended: false}))

//Send data object to the client via GET at /messages
app.get('/messages', (req,res) => {
    res.send(messages)
})

//Pushes the data sent by the client during a POST req. into the messages array.
app.post ('/messages',(req, res) => {
    messages.push(req.body)
    //Create a message event and pass it to the client with data as the requests's body (i.e., the new message).
    io.emit('message',req.body)
    res.sendStatus(200)
})

/*
    Setup a callback so that the server knows when a new client joins (i.e., a "connection event" is made).
    On a new connection, execute the anonymous function and pass "socket" as the parameter.
*/
io.on('connection', (socket) => {
    console.log("A user connected")
})

/* 
    Defines which port the expressJS server should listen to so that client could be able to contact the server.
    When we use socket.io we cannot directly server our backend with Express any longer.
    We would have to use the new node http server created on line 11 so that both Express and Socket.io will be running.
    Therefore, change app.listen to http.listen.
*/
var server = http.listen(3000, () => {
    console.log('Server is listening on port', server.address().port)
})
