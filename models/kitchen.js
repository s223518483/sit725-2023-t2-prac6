let client = require("../dbConnection");

let collection = client.db().collection("kitchen");

function postKitchen(kitchen, callback) {
	collection.insertOne(kitchen, callback);
}

function deleteKitchen(kitchen, callback) {
	collection.deleteOne(kitchen, callback);
}

function getAllKitchens(callback) {
	collection.find({}).toArray(callback);
}

module.exports = { postKitchen, getAllKitchens, deleteKitchen };
