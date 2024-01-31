const Profile = require("../models/profile");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display detail page for a profile.
exports.profile_details = asyncHandler(async (req, res, next) => {
  res.json(`Profile Details ${req.params.userID}`);
});
// curl -X GET  http://localhost:3000/lux/profile/fakeUser

// Handle profile update on POST.
exports.profile_update = asyncHandler(async (req, res, next) => {
  res.json(`Profile Update ${req.body.userID}`);
});
// curl -X POST http://localhost:3000/lux/profile/update -H "Content-Type: application/json" -d '{"userID":"fakeUser", "token":"fakeToken","first_name":"Chandler","last_name":"Nova","bio":"fake stuff","picture":"notSureHow"}'
