const router = require("express").Router();
const db = require("../../models");

router.put('/doesExist', ({ body, params }, res) => {
	db.Pets
		.findOne({ petID: body.petID })
		.then((dbPets) => {
			if (dbPets === null) {
				res.send("Doesn't exist");
			} else {
				res.send('exists');
			}
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.post('/newPet', ({ body, params }, res) => {
	// console.log(body);
	// console.log(params);
	db.Pets
		.create(body)
		.then((dbPets) => {
			res.json(dbPets);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});


module.exports = router;
