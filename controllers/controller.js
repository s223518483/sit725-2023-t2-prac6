let collection = require("../models/kitchen");

const postKitchen = (req, res) => {
	let kitchen = req.body;
	collection.postKitchen(kitchen, (err, result) => {
		if (!err) {
			res.json({ statusCode: 201, data: result, message: "success" });
		}
	});
};

const deleteKitchen = (req, res) => {
	let kitchen = req.body;
	collection.deleteKitchen(kitchen, (err, result) => {
		if (!err) {
			res.json({ statusCode: 202, data: result, message: "deleted" });
		}
	});
};

const getAllKitchens = (req, res) => {
	collection.getAllKitchens((err, result) => {
		if (!err) {
			res.json({
				statusCode: 200,
				data: result,
				message: "get all kitchen success",
			});
		}
	});
};

module.exports = { getAllKitchens, postKitchen, deleteKitchen };
