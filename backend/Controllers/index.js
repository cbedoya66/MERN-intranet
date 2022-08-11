const login = require('./Login');
const register = require('./register');
const getUsersById = require('./getUsersById');
const { model, models } = require('mongoose');

module.exports = {
    login,
    register,
    getUsersById
};