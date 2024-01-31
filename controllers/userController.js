const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display detail page for a specific User.
exports.user_detail = asyncHandler(async (req, res, next) => {
  res.json(`User Details for ${req.params.userID}`);
});
// curl -X GET  http://localhost:3000/lux/user/details/fakeUser

// Display a list of all Users
exports.user_all = asyncHandler(async (req, res, next) => {
  res.json(`All Users`);
});
// curl -X GET  http://localhost:3000/lux/user/all

// Handle User sign up on POST.
exports.user_sign_up = asyncHandler(async (req, res, next) => {
  res.json(`Sign Up for ${req.body.username}`);
});
// curl -X POST http://localhost:3000/lux/user/sign-up -H "Content-Type: application/json" -d '{"first_name":"Chandler", "last_name":"Nova", "email":"csnova@email.com", "username":"csnova","password": "hellothere", "confirm_password":"hellothere"}'

// Handle User sign in on POST.
exports.user_sign_in = asyncHandler(async (req, res, next) => {
  res.json(`Sign In for ${req.body.username}`);
});
// curl -X POST http://localhost:3000/lux/user/sign-in -H "Content-Type: application/json" -d '{"username":"csnova", "password": "hellothere"}'

// Handle User sign out on POST.
exports.user_sign_out = asyncHandler(async (req, res, next) => {
  res.json(`Sign Out`);
});
// curl -X POST http://localhost:3000/lux/user/sign-out
