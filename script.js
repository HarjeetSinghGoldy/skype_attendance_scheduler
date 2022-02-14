// import { Api, connect } from "skype-http";
var SKYPEHTTP = require('skype-http');
var NODESCHEDULE = require('node-schedule');
var random=11;
console.log("Script running!!!!",random);
async function run(msg) {
 SKYPEHTTP.Api = await SKYPEHTTP.connect({credentials: {username: "email@gmail.com", password: "********"}});
  //8:live:b0b578de925411d2 // kritka's id
  //8:ashishvista // ashish id's
  
  var min=0;
      var max=30;
       random = (Math.random() * (+max - +min) + +min).toFixed();
  var sendMsgRes = await api.sendMessage({textContent: msg}, "8:live:b0b578de925411d2");
  console.log("sendMsgRes",sendMsgRes);
}

NODESCHEDULE.scheduleJob(`${random} 10 * * 1,5`, () => {
  console.log("login");
  var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
  run(`Hi, Kritika,Login time!!!  ${time}`);
 })


 NODESCHEDULE.scheduleJob(`${random} 20 * * 1,5`, () => {
   console.log("login");
   var today = new Date();
 var time = today.getHours() + ":" + today.getMinutes();
 run(`Bye, Kritika Logout time!!! ${time}`);
  })

  NODESCHEDULE.scheduleJob(`* * * * *`, () => {
    console.log("Server testing");
    var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  console.log("It's working!!!!!!!!!!! ",time);
   })
