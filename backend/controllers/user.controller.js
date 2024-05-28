import User from "../models/user.model";

export const getUserProfile = async (req, res) => {
  const {username} = req.params;


  try {
    const user = await User.findOne({username}).select("-password");
    if(!user) {
      return res.status(404).json({error: "User not found"});
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Couldn't find user", error);
    res.status(500).json({error: "Internal Server Error"});
  }
}


