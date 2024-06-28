import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  followUnfollowUser,
  getSuggestedUsers,
  getUserProfile,
  updateUser
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", isAuthenticated, getUserProfile);
router.get("/suggested", isAuthenticated, getSuggestedUsers);
router.post("/follow/:id", isAuthenticated, followUnfollowUser);
router.post("/update", isAuthenticated, updateUser);

export default router;
