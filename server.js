const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const colors = require("colors")
const connectDB = require("./config/db")

//load env vars
dotenv.config({ path: "./config/config.env" })

//connect to database
connectDB()

//Route files
const centers = require("./routes/centers")
const app = express()

//Dev logging middleware
app.use(morgan("dev"))

//mount routes
app.use("/api/v1/centers", centers)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
  console.log(
    `server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)

//handle unhandled primse rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`error ${err.message}`.red)
  //close server & exitprocess
  server.close(() => process.exit(1))
})