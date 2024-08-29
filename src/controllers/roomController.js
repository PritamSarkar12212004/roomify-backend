import { Publish } from "../models/publishModel/publishModel.js";
const roomFinder = async (req, res) => {
  try {
    const findData = await Publish.find({});
    res.send(findData);
  } catch (error) {
    console.log(error);
  }
};
const roomAdminController = async (req, res) => {
  try {
    const data = await req.body.id;
    const findata = await Publish.findById(data);
    res.send(findata);
  } catch (error) {
    console.log(error);
  }
};
const roomAdminDelete = async (req, res) => {
  try {
    const data = await req.body._id;
    const findata = await Publish.findByIdAndDelete(data);
  } catch (error) {
    console.log(error);
  }
};
const roomAdminUpdate = async (req, res) => {
  try {
    const data = await req.body;
    const findData = await Publish.findByIdAndUpdate(data.userid, {
      ...data.data,
      owner: data.owner,
    });
    console.log(findData);
  } catch (error) {
    console.log(error);
  }
};

export { roomFinder, roomAdminController, roomAdminDelete, roomAdminUpdate };
