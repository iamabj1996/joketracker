const express = require("express");
const UpdateScore = require("../models/UpdateScore");
const router = express.Router();

router.get("/create-user/:name", async (req, res) => {
  const name = req.params.name;

  try {
    let nameExists = await UpdateScore.findOne({ name });
    if (nameExists) {
      res.status(400).json({ msg: "User already exist" });
    }
    const newUser = new UpdateScore({
      name,
      score: 0,
    });

    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.send("Update Score route");
});

router.get("/update-score/:name/:type", async (req, res) => {
  console.log("this ran");
  const name = req.params.name;
  const type = req.params.type;

  try {
    let nameExists = await UpdateScore.findOne({ name });
    if (!nameExists) {
      res.status(400).json({ msg: "User already exist" });
    }
    profile = await UpdateScore.findOneAndUpdate(
      { name },
      {
        score:
          type === "positive" ? nameExists.score + 1 : nameExists.score - 1,
      }
    );

    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let allProfiles = await UpdateScore.find();

    res.status(200).json(allProfiles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
