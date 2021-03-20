const router = require("express").Router();
const db = require("../../models");

router.put('/doesExist', ({ body, params }, res) => {
	db.Pets
		.findOne({ petID: body.petID })
		.then((dbPets) => {
			if (dbPets === null) {
				res.send("Doesn't exist");
			} else {
				res.json(dbPets);
			}
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.post('/newPet', ({ body, params }, res) => {
	
	db.Pets
		.create(body)
		.then((dbPets) => {
			res.json(dbPets);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put('/findOne', ({ body, params }, res) => {
	
	db.Pets
		.findOne({ _id: body.findUser })
		.then((dbPets) => {
			res.json(dbPets);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;
