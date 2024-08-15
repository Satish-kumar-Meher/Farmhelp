const { Schema, model } = require("mongoose")
// const { required } = require("../validators/validators")

const cropSchema = new Schema(
    {
    id : {type:String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    tips : {
        plantselection : {type:String, required: true},
        planting : {type:String, required: true},
        monitoring : {type:String, required: true},
        siteselection :{type:String, required: true},
        fieldpreparation : {type:String, required: true},
        weeding : {type:String, required: true},
        irrigation : {type:String, required: true},
        fertilization_chemical : {type:String, required: true},
        preventive_measures : {type:String, required: true},
        plantprotection_chemical : {type:String, required: true},
        harvesting : {type:String, required: true},
        post_harvesting : {type:String, required: true},

    },
    weather : {type:String, required: true},
    imgUrl : {type:String, required: true},
}
);
const Crops = new model("Crops", cropSchema);

module.exports = Crops;

