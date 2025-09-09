import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();   // ✅ wait for MongoDB query
    res.status(200).json(users);       // ✅ send back the data
  } catch (e) {
    res.status(500).json({ error: e.message }); // ✅ handle error properly
  }
};
