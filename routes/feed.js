const express = require("express");
const { body } = require("express-validator");
const feedController = require("../controllers/feed");
const auth = require("../middleware/is-auth");

const router = express.Router();

router.get("/posts", feedController.getPosts);
router.post(
  "/post",
  auth.isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);
router.get("/post/:postId", feedController.getPost);
router.put(
  "/post/:postId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.editPost
);
router.delete("/post/:postId", feedController.deletePost);

module.exports = router;
