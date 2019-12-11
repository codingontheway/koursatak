const User = require("../models/User")
const errorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")

// @desc  register user
// @router POST /api/v1/auth/register
// @access public
exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true })
})
