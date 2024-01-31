const Thread = require("../models/threads");
const Message = require("../models/messages");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of a users threads.
exports.thread_list = asyncHandler(async (req, res, next) => {
  res.json(`Thread list for ${req.params.userID}`);
});

// Display Messages in thread.
exports.thread_messages = asyncHandler(async (req, res, next) => {
  res.json(`Messages in thread ${req.params.threadID}`);
});

// Display unviewed message threads
exports.thread_unViewed = asyncHandler(async (req, res, next) => {
  res.json(`Unviewed Message Threads ${userID}`);
});
