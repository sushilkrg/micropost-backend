import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  bookmarkPost,
  createPost,
  deletePost,
  getAllPosts,
  getBookmarkedPosts,
  getFollowingPosts,
  getLikedPosts,
  getUserPosts,
  likeUnlikePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", isAuthenticated, getAllPosts);
router.get("/following", isAuthenticated, getFollowingPosts);
router.get("/likes/:id", isAuthenticated, getLikedPosts);
router.get("/user/:username", isAuthenticated, getUserPosts);
router.post("/create", isAuthenticated, createPost);
router.post("/like/:id", isAuthenticated, likeUnlikePost);
router.delete("/:id", isAuthenticated, deletePost);
// todo
router.post("/bookmark/:id", isAuthenticated, bookmarkPost);
router.get("bookmarks/:id", isAuthenticated, getBookmarkedPosts);

export default router;
