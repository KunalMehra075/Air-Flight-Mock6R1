const fs = require("fs")
const logger = (req, res, next) => {
    // let data = JSON.parse(fs.readFileSync("./Middleware/logs.json", "utf-8"))
    let log = { Method: req.method, Route: req.url }
    // data.push(log)
    // fs.writeFileSync("./Middleware/logs.json", JSON.stringify(data), "utf-8")
    console.log(log);
    next()
}
module.exports = { logger };