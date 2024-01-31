const Comment = require("../models/comment");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display detail page for a specific comment.
exports.comment_detail = asyncHandler(async (req, res, next) => {
  res.json(`Comment Details ${req.params.commentID}`);
});
// curl -X GET  http://localhost:3000/lux/comment/fakeComment

// Handle comment create on POST.
exports.comment_create = asyncHandler(async (req, res, next) => {
  res.json(`Comment Create ${req.body.postID}`);
});
// curl -X POST http://localhost:3000/lux/comment/create -H "Content-Type: application/json" -d '{"userID":"fakeUser", "postID": "PostID123", "text" : "Some Random Text"}'
