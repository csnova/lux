const Thread = require("../models/thread");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of a users threads.
exports.thread_list = asyncHandler(async (req, res, next) => {
  res.json(`Thread list for ${req.params.userID}`);
});
// curl -X GET  http://localhost:3000/lux/post/all

// Display Messages in thread.
exports.thread_messages = asyncHandler(async (req, res, next) => {
  res.json(`Messages in thread ${req.params.threadID}`);
});
// curl -X GET  http://localhost:3000/lux/post/all

// Display unviewed message threads
exports.thread_unViewed = asyncHandler(async (req, res, next) => {
  res.json(`Unviewed Message Threads ${userID}`);
});
// curl -X GET  http://localhost:3000/lux/post/all
