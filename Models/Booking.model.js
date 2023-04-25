
const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
    user: { type: mongoose.ObjectId, ref: "User" },
    flight: { type: mongoose.ObjectId, ref: "Flight" }
})

const BookingModel = mongoose.model("bookings", bookingSchema)
module.exports = { BookingModel } 