import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	birthDate: {
		type: Date,
		required: true,
		get: (date) => date.toISOString().split("T")[0], // Getter to format the date
	},
	country: {
		type: String,
		default: "Romania",
	},
	city: {
		type: String,
		default: "Cluj-Napoca",
	},
});

PersonSchema.set("toJSON", { getters: true });
PersonSchema.set("toObject", { getters: true });

export default mongoose.model("Person", PersonSchema);
