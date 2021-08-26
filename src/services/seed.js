const User = require("../models/User");
const Post = require("../models/Post");

const mongoose = require("../database");

const usersJSON = require("../data/users.json");
const postsJSON = require("../data/posts.json");

async function seed() {
  /**
   * Transactions are necessary, but if you are not using a replica set,
   * it will not work, so you can comment all the transaction lines.
   */

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    /**
     * Version not using transactions.
     */
    // const users = await User.insertMany(usersJSON);
    // await Post.insertMany(postsJSON);

    const users = await User.insertMany([usersJSON], { session: session });
    await Post.insertMany([postsJSON], {
      session: session,
    });

    const populatedPosts = await Post.find().populate("user");

    await session.commitTransaction();
    return { users: users, posts: populatedPosts };
  } catch (err) {
    session.endSession();

    console.log(err);
    return { err: true };
  }
}

module.exports = seed;
