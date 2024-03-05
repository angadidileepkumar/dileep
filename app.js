

// ############################################################################
// create a module and accessing from another file

// let some = require('./cal')

// res = some.add(2,3)

// res1 = some.sub(4,5)

// console.log(`the output is ${res}, ${res1}`)

// ######################################################################

// path module--------------------------------

// let path = require('path')

// let pathObj = path.parse(__filename)

// console.log(pathObj);

// #############################################################################

// OS module--------------

// let os = require('os')

// let totalMem = os.totalmem()

// let freeMem = os.freemem()

// console.log(`the memory info ${totalMem }, ${freeMem}`);


// #####################################################################

// file system (fs)-------

// // to read a file--------

// let fs = require('fs')

// fs.readFile('app.js','ascii', function(err,data){
//     console.log(data)
// });

// // to write into a file----------

// fs.writeFile('cal1.js',"let a = () =>{console.log('this is some diff file yessss....!')}", function(err){
//     console.log('data saved')
// });

// to append code into file---------

// fs.appendFile('cal1.js','\nconsole.log("this is dileep")', function(err){
//     console.log('done')
// })

// to delete the file -----

// 

// ################################################################################

// TO READ FILES ON DIRECTORY-----------

// fs.readdir('./', (err, data) => {
//     console.log(data,err)
// })

// #####################################################################################

// EVENTS--------------
// const EventEmitter = require('events')

// const emitter = new EventEmitter();
// // console.log(eventObj) 
 
// // adding listner.....
// emitter.on('this is emitted from object', () => {
//     console.log('listner called');
// })

// // raising a event.....
// emitter.emit('this is emitted from object'); 

// ???????????????????????????????????????????????????????????????????????????????
// ##########################################################################################

// creating a server old way without express--------

// http module------
// old way...........

// const http = require('http')

// const server = http.createServer();

// server.on('connection', () => {
//     console.log('new connection...')
// })


// server.listen(9000, () => {
//     console.log('running port 9000...');
// })

// new way..........

// const http = require('http')
// const server = http.createServer( (req,res) => {
//     if (req.url === '/'){
//     res.write('hello world')
//     res.end()}

//     if (req.url === '/data'){
//         res.write(JSON.stringify([1,2,3,5]))
//         res.end();
//     }
// });


// server.listen(8080, () => {
//         console.log('running port 9000...');
//     })

// ###########################################################3
// using express---------------------


// const express = require('express')

// const app = express()

// app.get('/get/:id', (req,res)=> {
//     const id = req.params.id
//     if (id == 10){
//         res.send('this is call from dileep')
//     }
//     else if (id == 20){
//         res.send('this is call from kumar')
//     }else{
//         res.send('havn"t got any user on this id')
//     }
// })


// app.listen(8080, () =>{
//     console.log('reunning port...')
// })


 














// good start for the day-----------

console.log('this is console')

console.log('this is console 2..')
// process.exit(1)
process.exitCode = 1











































