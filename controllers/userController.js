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

// Display a list of all Users
exports.user_all = asyncHandler(async (req, res, next) => {
  res.json(`All Users`);
});

// Handle User sign up on POST.
exports.user_sign_up = asyncHandler(async (req, res, next) => {
  res.json(`Sign Up`);
});

// Handle User sign in on POST.
exports.user_sign_in = asyncHandler(async (req, res, next) => {
  res.json(`Sign In`);
});

// Handle User sign out on POST.
exports.user_sign_out = asyncHandler(async (req, res, next) => {
  res.json(`Sign Out`);
});
