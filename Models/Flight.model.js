const mongoose = require("mongoose");
const flightSchema = mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
})

const FlightsModel = mongoose.model("flights", flightSchema)
module.exports = { FlightsModel };