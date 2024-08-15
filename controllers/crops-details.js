const Crops = require("../models/crops-model");
const cropsDetails = async (req, res) => {
try {
const response = await Crops.find();
if (!response) {
// Handle the case where no document was found
res.status(404).json({ msg: "No crops found" });
return;
}
return res.status(200).json({ msg: "Crops found", data: response });
} catch (error) {
console.log(`error from the server ${error}`);
}
};
module.exports = cropsDetails;
