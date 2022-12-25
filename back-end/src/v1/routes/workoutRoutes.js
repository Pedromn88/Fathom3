const express=  require("express")
const workoutController = require("../../controllers/workoutController")

const router = express.Router()

router
.get("/",workoutController.getAllWorkouts)
.get("/:workoutId", workoutController.getOneWorkouts);

module.exports = router