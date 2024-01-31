const Message = require("../models/message");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display Message Details.
exports.message_details = asyncHandler(async (req, res, next) => {
  res.json(`Message Details ${req.params.messageID}`);
});
// curl -X GET  http://localhost:3000/lux/message/fakeMessage

// Handle create message.
exports.message_create = asyncHandler(async (req, res, next) => {
  res.json(`Message Created by ${req.body.from}`);
});
// curl -X POST http://localhost:3000/lux/message/create -H "Content-Type: application/json" -d '{"from":"fakeUser", "to": "otherFakeUser", "text": "Some Fake Message"}'

// Handle marking message as viewed
exports.message_viewed = asyncHandler(async (req, res, next) => {
  res.json(`Message Marked as Viewed ${req.body.messageID}`);
});
// curl -X POST http://localhost:3000/lux/message/viewed -H "Content-Type: application/json" -d '{"messageID": "FakeMessage"}'

// Handle marking all messages in a thread as viewed
exports.message_viewed_all = asyncHandler(async (req, res, next) => {
  res.json(`Mark all Messages as Viewed ${req.body.threadID}`);
});
// curl -X POST http://localhost:3000/lux/message/viewed/all -H "Content-Type: application/json" -d '{"threadID": "fakeThread"}'
