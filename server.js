
console.log('introduction to express.js modification');
//1-import express
const express = require('express');
const users = require ('./userList');
//2-associate the express methods to a variable
const app = express();


//creation your endpoints
// app.get('/', (req,res) => {
//     res.send('hello world');
// });

// serve the static files
app.use(express.static('public'));
app.use('/api' , require('./routes/users'));
//create data
// const users = [
//     {name : 'faten',
//     age:20,
//     id:1
//     },
//     {name : 'fahd',
//     age:21,
//     id:2,
//     },
//     ];
// console.log(users)


//middlleware
const sayHi = (req , res, next) => {
    console.log('hello');
    next()
}
app.use(sayHi)
//3-create the variable PORT
const port = 5000;
//4-listen to the Port
app.listen (port , (err) => {
    err ? console.log(err) : console.log('the server is running on port 5000');
});
 