'use strict';

const slackClient = require("../server/slackClient");
var constants  = require("../server/token");

const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);

const rtm = slackClient.init('bf035ccb6c1394a2737a6233c2eaf429','debug');
rtm.start();
server.listen(3000,()=>{
    console.log("MicroService App Is Running");
    console.log(`App is listening on ${server.address().port} in ${service.get('env')}`);
})