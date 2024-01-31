const Message = require("../models/messages");
const Thread = require("../models/threads");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display Message Details.
exports.message_details = asyncHandler(async (req, res, next) => {
  res.json(`Message Details ${req.params.messageID}`);
});

// Handle create message.
exports.message_create = asyncHandler(async (req, res, next) => {
  res.json(`Message Create`);
});

// Handle marking message as viewed
exports.message_viewed = asyncHandler(async (req, res, next) => {
  res.json(`Message Marked as Viewed ${req.params.messageID}`);
});

// Handle marking all messages in a thread as viewed
exports.message_viewed_all = asyncHandler(async (req, res, next) => {
  res.json(`Mark all Messages as Viewed ${req.body.threadID}`);
});
