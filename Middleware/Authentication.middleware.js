const jwt = require("jsonwebtoken")

const Authentication = (req, res, next) => {

    let token = req.headers.authorization
    if (!token) return res.status(401).json({ Message: "Protected Route, Please Login" })

    jwt.verify(token, process.env.key, (err, decoded) => {
        if (decoded) {
            next()
        } else {
            res.status(400).json({ Message: "JWT error" })
        }
    });
}
module.exports = { Authentication };