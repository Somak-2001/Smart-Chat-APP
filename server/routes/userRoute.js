const { register, login, getAllUsers } = require("../controller/usersController");
const express = require("express");

const router = require("express").Router();

router.post('/register', register);
router.post('/login', login);
router.get('/allusers/:id', getAllUsers);

module.exports = router;