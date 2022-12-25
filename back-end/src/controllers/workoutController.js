const workoutService = require("../services/workoutService")


const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.send({status: "ok", data:allWorkouts })
}

const getOneWorkouts = (req, res) => {
   const {params : {workoutId}} = req

if(!workoutId) {
    return;
}
const workout = workoutService.getOneWorkouts(workoutId)
res.send({status:"ok", data: workout})

}

module.exports = {
    getAllWorkouts,
    getOneWorkouts
}