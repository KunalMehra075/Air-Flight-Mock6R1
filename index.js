const { connection } = require("./Config/db");
const { FlightsRouter } = require("./Routes/Flight.route");
const { BookingRouter } = require("./Routes/Booking.route");
const { BookingModel } = require("./Models/Booking.model");
const { UserModel } = require("./Models/User.model");
const { FlightsModel } = require("./Models/Flight.model");
const { Authentication } = require("./Middleware/Authentication.middleware");
const { logger } = require("./Middleware/Logger.middleware");

const express = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();


app.use(express.json());
app.use(logger)
app.use("/flights", Authentication, FlightsRouter)
app.use("/bookings", Authentication, BookingRouter)



app.get("/", (req, res) => {
    try {
        console.log(new Date().toISOString());
        res.status(200).json({ Message: "Welcome to Bookin App" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});

// 
app.get("/dashboard", Authentication, async (req, res) => {
    try {
        const BookingData = await BookingModel.find();
        const UsersData = await UserModel.find();
        const FligtsData = await FlightsModel.find();
        res.status(200).json({ Message: "Dashboard route", BookingData, UsersData, FligtsData });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});

//? <!----------------------------------------------- < User Router> ----------------------------------------------->

// ! POST : Register a New User
app.post("/register", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    try {
        const Users = await UserModel.find({ name, email });
        if (Users.length > 0) {
            res.status(201).json({ Message: "You have already registered,Please Login", exist: true })
        } else {
            bcrypt.hash(password, 10, async (err, hash) => {
                if (hash) {
                    let instance = new UserModel({ name, email, password: hash })
                    await instance.save()
                    res.status(201).json({ Message: "User Registered Successfully", created: true });
                } else {
                    res.status(401).json({ Message: "Password Encrypting Error", created: false });
                }
            })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});
// ! POST : Login User
app.post("/login", async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    try {
        const User = await UserModel.findOne({ email });
        if (User) {
            bcrypt.compare(password, User.password, (err, result) => {
                if (result) {
                    jwt.sign({ userID: User._id }, process.env.key, (err, token) => {
                        if (token) {
                            // console.log(token);
                            res.status(201).json({ Message: "Login Success", token, exist: true, success: false });
                        } else {
                            res.status(201).json({ Message: "JWT error", exist: true, success: false });
                        }

                    });
                } else {
                    res.status(201).json({ Message: "Wrong Credentials", exist: true, success: false });
                }
            });
        } else {
            res.status(201).json({ Message: "You havent been registered", exist: false });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});


//? <!----------------------------------------------- < Listening To Server> ----------------------------------------------->


app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log("Error connecting to DB");
    }
    console.log(`Server is Rocking on port ${process.env.PORT}`);
});
