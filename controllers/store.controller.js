const store = require("../models/store.model");

const createStore = async (req, res) => {
  try {
    const data = await store.create(req.body);
    if (data) {
      return res.status(201).json(data);
    }

    return res.status(400).json({
      error: "Store not created",
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createStore,
};
