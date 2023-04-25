const express = require("express");
const { BookingModel } = require("../Models/Booking.model");
const BookingRouter = express.Router()

// ! POST A New Booking
BookingRouter.post("/", async (req, res) => {
    let NewBooking = req.body
    try {
        const instance = new BookingModel(NewBooking);
        await instance.save()
        res.status(201).json({ Message: "New Booking Creation Success", instance });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});
// ! GET All bookings
BookingRouter.get("/", async (req, res) => {
    try {
        const Bookings = await BookingModel.find();
        res.status(201).json({ Message: "All the Bookings", Bookings });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});
module.exports = { BookingRouter };