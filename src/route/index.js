const { Router } = require('express');
const route = Router();

const { getUsers, createUsers, getUserById, deleteUserById, updateUser } = require('../controllers/index.controller');

route.get('/users', getUsers);
route.get('/user/:id', getUserById);
route.post('/users', createUsers);
route.delete('/user/:id', deleteUserById);
route.put('/user/:id', updateUser);

module.exports = route;