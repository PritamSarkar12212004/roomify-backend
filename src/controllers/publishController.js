import { Publish } from "../models/publishModel/publishModel.js";
const roomPublishController = async (req, res) => {
  try {
    const data = await req.body;
    const insertdata = await Publish.insertMany([data]);
    res.send(insertdata);
  } catch (error) {
    console.log(error);
  }
};
const roomPublishFinder = async (req, res) => {
  try {
    const data = await req.body;
    const finddata = await Publish.find({ owner: data.owner });
    finddata ? res.send(finddata) : res.send("not found");
  } catch (error) {
    console.log(error);
  }
};

export { roomPublishController, roomPublishFinder };
