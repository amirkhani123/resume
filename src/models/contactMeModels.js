const { Schema, models, model } = require("mongoose");

const mySchema = new Schema({
  name: { type: String, reqired: true },
  lastName: { type: String, reqired: true },
  descriptions: { type: String, reqired: true },
});

const contactMeModels =
  models.contactMeModels || model("contactMeModels", mySchema);
export default contactMeModels;
