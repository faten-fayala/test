
const express = require('express');
const users = require ('../userList');
const router = express.Router()

//Get users
// @Get /users
router.get('/users' , (req,res) => {
    res.json(users);
});

//Get user by id
// @Get /user/:id
router.get('/users/:id' , (req,res) => {
    res.json(users.filter(user => user.id === parseInt(req.params.id))
        );
});
//Delete user by id
//@delete /api/users/:id
router.delete('/users/:id' , (req,res) => {
    res.json(users.filter(user => user.id !== parseInt(req.params.id))
        );
});
//add new users
router.post('/users' , (req,res) => {
    res.json(users.concat(req.body))
        
});
//edit user
router.put('/users/:id' , (req,res) => {
    res.json(users.map(user => user.id === parseInt(req.params.id ? req.body : user)))
})
module.exports = router;