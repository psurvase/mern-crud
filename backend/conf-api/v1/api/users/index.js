
const express = require("express");
const router = express.Router();
const User = require('../../models/user')

router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users)
})

router.get("/:id", async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.send(user);
    } catch {
      res.status(404);
      res.send({ error: "Post doesn't exist!" });
    }
  });


router.post('/', async (req, res) => {
    const {firstName,lastName} = req.body
    const user = await User.create({firstName,lastName});
    res.send({"id": user.id})
})

module.exports = router;