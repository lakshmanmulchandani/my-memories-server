// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostMessage from "./models/postMessage.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
import postRoutes from "./routes/posts.js";

app.use(bodyParser.json({limit: "30mb", extended: "true"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}));
app.use(cors());
app.use("/posts", postRoutes);

app.get("./", (req, res) => res.send("Hello from my memories api"));
// const password = "h1RIvc0gP4Z6syF0";
// const username = encodeURIComponent("mymemories");
// const password = encodeURIComponent("0NcwCJpLL9f3XCco");
// const cluster = "<cluster0>";
// const authSource = "<authSource>";
// const authMechanism = "<authMechanism>";
// const CONNECTION_URL =
//   "mongodb+srv://mymemory:0NcwCJpLL9f3XCco@cluster0.l2t6c.mongodb.net/posts_db?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log("listening on port " + PORT)))
  .catch((issues) => console.log("issues " + issues));

// const createPost = () => {
//   const newPostMessage = new PostMessage({
//     title: "memory",
//     message: "my memory",
//   });

//   newPostMessage.save();
// };
// export const createPost = async (req, res) => {
//   const post = req.body;

//   const newPostMessage = new PostMessage(post);

//   try {
//     await newPostMessage.save();

//     res.status(201).json(newPostMessage);
//   } catch (error) {
//     res.status(404).json({message: error.message});
//   }
// };

// createPost();
