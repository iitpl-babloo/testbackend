import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // optional validation
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create Model
const User = mongoose.model("User", userSchema);

export default User;
