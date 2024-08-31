import { Publish } from "../models/publishModel/publishModel.js";

const filterController = async (req, res) => {
  const data = req.body;
  const dataKeysString = await Object.keys(data).join(", ");
  if (dataKeysString === "1500-2000") {
    const filteredData = await Publish.find({
      price: { $gte: 1500, $lte: 2000 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "2000-2500") {
    const filteredData = await Publish.find({
      price: { $gte: 2000, $lte: 2500 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "2500-3000") {
    const filteredData = await Publish.find({
      price: { $gte: 2500, $lte: 3000 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "3000-3500") {
    const filteredData = await Publish.find({
      price: { $gte: 3000, $lte: 3500 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "3500-4000") {
    const filteredData = await Publish.find({
      price: { $gte: 3500, $lte: 4000 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "4000-4500") {
    const filteredData = await Publish.find({
      price: { $gte: 4000, $lte: 4500 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "4500-5000") {
    const filteredData = await Publish.find({
      price: { $gte: 4500, $lte: 5000 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "5000-5500") {
    const filteredData = await Publish.find({
      price: { $gte: 5000, $lte: 5500 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "5500-6000") {
    const filteredData = await Publish.find({
      price: { $gte: 5500, $lte: 6000 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "6000-6500") {
    const filteredData = await Publish.find({
      price: { $gte: 6000, $lte: 6500 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "7000-7500") {
    const filteredData = await Publish.find({
      price: { $gte: 7000, $lte: 7500 },
    });
    res.send(filteredData);
  } else if (dataKeysString === "furnished") {
    const filteredData = await Publish.find({ furnished: "Furnished" });
    res.send(filteredData);
  } else if (dataKeysString === "unfurnished") {
    const filteredData = await Publish.find({ furnished: "Unfurnished" });
    res.send(filteredData);
  } else if (dataKeysString === "semi-furnished") {
    const filteredData = await Publish.find({ furnished: "Semifurnished" });
    res.send(filteredData);
  } else if (dataKeysString === "independent") {
    const filteredData = await Publish.find({ independent: "Independent" });
    res.send(filteredData);
  } else if (dataKeysString === "non-independent") {
    const filteredData = await Publish.find({
      independent: "Nonindependent",
    });
    res.send(filteredData);
  } else if (dataKeysString === "single") {
    const filteredData = await Publish.find({ type: "Single" });
    res.send(filteredData);
  } else if (dataKeysString === "duo") {
    const filteredData = await Publish.find({ type: "Duo" });
    res.send(filteredData);
  } else if (dataKeysString === "gropus") {
    const filteredData = await Publish.find({ type: "Group" });
    res.send(filteredData);
  } else if (dataKeysString === "male") {
    const filteredData = await Publish.find({ gender: "Male" });
    res.send(filteredData);
  } else if (dataKeysString === "female") {
    const filteredData = await Publish.find({ gender: "Female" });
    res.send(filteredData);
  } else if (dataKeysString === "family") {
    const filteredData = await Publish.find({ gender: "Family" });
    res.send(filteredData);
  }
};

export { filterController };
