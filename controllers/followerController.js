const Follow = require("../models/follow");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of who a user is following.
exports.follow_list = asyncHandler(async (req, res, next) => {
  res.json(`User ${req.params.userID} is following`);
});
// curl -X GET  http://localhost:3000/lux/follow/fakeUser

// Handle add to follow list.
exports.follow_add = asyncHandler(async (req, res, next) => {
  res.json(`User ${req.body.userID} is now following ${req.body.followID}`);
});
// curl -X POST http://localhost:3000/lux/follow/add -H "Content-Type: application/json" -d '{"userID":"fakeUser", "followID": "followedUser"}'
