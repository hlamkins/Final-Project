const router = require("express").Router();
const db = require("../../models");

router.post("/newUser", ({ body, params }, res) => {
  // console.log(body);
  // console.log(params);
  db.Users.create(body)
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/doesExist", ({ body, params }, res) => {
  db.Users.findOne({ email: body.email })
    .then((dbUsers) => {
      if (dbUsers === null) {
        res.send("Doesn't exist");
      } else {
        res.send("exists");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/findOne", ({ body, params }, res) => {
	db.Users.findOne({ email: body.email })
	  .then((dbUsers) => {
		if (dbUsers === null) {
		  res.send("Doesn't exist");
		} else {
		  res.json(dbUsers);
		}
	  })
	  .catch((err) => {
		res.status(400).json(err);
	  });
  });
// see daniels documentation to finish below!!// push pet into users array confirm on mongodb under users and saved array
router.put("/savePet", ({ body, params }, res) => {
	console.log(body.findUser);
	console.log(body.createPet);
  db.Users.findOneAndUpdate(
    { _id: body.findUser._id },
    { $push: { savedPets: body.createPet._id } },
    { new: true }
  )
    .then((updatedArr) => {
		console.log(updatedArr);
      res.json(updatedArr);
    })
    .catch((err) => {
      res.status(400).json(err);
    });

	

});



router.get("/", (req, res) => {
  db.Users.find({})
    .sort({ date: -1 })
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
