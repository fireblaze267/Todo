const express = require('express');
const cors = require ('cors');

const server = express();
server.use(cors());
server.use(express .json());
const Taskroutes = require('./routes/Taskroutes');

server.use('/task', Taskroutes);

server.listen(3333,() => {
console.log("server on");

});