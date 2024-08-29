import User from "../models/user/userModel.js";
const registercontroller = async (req, res) => {
  try {
    const data = await req.body;
    const findData = await User.findOne({ email: data.email });
    if (findData) {
      res.send("User already exists");
    } else {
      const insertData = await User.insertMany(data);
      res.send(insertData);
    }
  } catch (error) {
    console.log(error);
  }
};

const logincontroller = async (req, res) => {
  const data = await req.body;
  try {
    const findData = await User.findOne({
      email: data.email,
      password: data.password,
    });
    findData ? res.send(findData) : res.send("User not found");
  } catch (error) {}
};

export { registercontroller, logincontroller };
