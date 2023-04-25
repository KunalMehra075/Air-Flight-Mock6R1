const express = require("express");
const FlightsRouter = express.Router()

const { FlightsModel } = require("../Models/Flight.model");

// ! GET All Flights 
FlightsRouter.get("/", async (req, res) => {
    let query = req.query
    try {
        const Data = await FlightsModel.find(query);
        res.status(200).json({ Message: "All the Flights", Data: Data });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});

// ! GET Flight by ID 
FlightsRouter.get("/:id", async (req, res) => {
    let id = req.params.id
    try {
        const Data = await FlightsModel.findOne({ _id: id });
        res.status(200).json({ Message: "Flight By Id", Data: Data });
    } catch (error) {
        console.log(error)
        res.status(400).json({ Message: error })

    }
});
FlightsRouter.post("/", async (req, res) => {
    let NewFlight = req.body
    try {
        const instance = await FlightsModel(NewFlight);
        await instance.save()
        res.status(201).json({ Message: "Succesfully Posted New Flight", instance });
    } catch (error) {
        console.log(error)
        res.status(400).json({ Message: error })

    }
});
FlightsRouter.delete("/:id", async (req, res) => {
    let id = req.params.id
    try {
        const deleted = await FlightsModel.findByIdAndDelete({ _id: id });
        res.status(202).json({ Message: "Deleted Flight Successfully", deleted });
    } catch (error) {
        console.log(error)
        res.status(400).json({ Message: error })

    }
});
FlightsRouter.put("/:id", async (req, res) => {
    let id = req.params.id
    let payload = req.body
    try {
        const replaced = await FlightsModel.findOneAndReplace({ _id: id }, payload);
        res.status(204).send({ Message: "Replaced Flight Successfully", replaced });
    } catch (error) {
        console.log(error)
        res.status(400).json({ Message: error })

    }
});
FlightsRouter.patch("/:id", async (req, res) => {
    let id = req.params.id
    let payload = req.body
    try {
        const updated = await FlightsModel.findOneAndUpdate({ _id: id }, payload);
        res.status(204).send({ Message: "Replaced Flight Successfully", updated });
    } catch (error) {
        console.log(error)
        res.status(400).json({ Message: error })

    }
});



module.exports = { FlightsRouter };