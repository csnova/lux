const Post = require("../models/post");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const { json } = require("express");

// Display list of all posts.
exports.post_list = asyncHandler(async (req, res, next) => {
  res.json(`Post List`);
});
// curl -X GET  http://localhost:3000/lux/post/all

// Display detail page for a specific post.
exports.post_detail = asyncHandler(async (req, res, next) => {
  res.json(`Post Detail ${req.params.postID}`);
});
// curl -X GET  http://localhost:3000/lux/post/fakePost

// Handle post create on POST.
exports.post_create = asyncHandler(async (req, res, next) => {
  res.json(`Post Created by ${req.body.userID}`);
});
// curl -X POST http://localhost:3000/lux/post/create -H "Content-Type: application/json" -d '{"userID":"fakeUser", "postID": "PostID123"}'

// Handle post like on POST.
exports.post_like = asyncHandler(async (req, res, next) => {
  res.json(`Post ${req.body.postID} Liked by ${req.body.userID}`);
});
// curl -X POST http://localhost:3000/lux/post/like -H "Content-Type: application/json" -d '{"userID":"fakeUser", "postID": "PostID123"}'
