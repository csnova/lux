const Profile = require("../models/profile");
const Friends = require("../models/friends");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display detail page for a profile.
exports.profile_details = asyncHandler(async (req, res, next) => {
  res.json(`Profile Details ${req.params.userID}`);
});

// Handle profile update on POST.
exports.profile_update = asyncHandler(async (req, res, next) => {
  res.json(`Profile Update ${req.body.userID}`);
});
