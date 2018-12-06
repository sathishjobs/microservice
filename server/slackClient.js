'use strict';

var RtmClient = require('@slack/client').RTMClient;
// var token = process.env.SLACK_API_TOKEN || '';
module.exports.init = function slackClient(token,logLevel){
    const rtm = new RtmClient(token,{logLevel : 'debug'});
    return rtm;
};