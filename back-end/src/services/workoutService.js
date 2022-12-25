const Workouts  = require ("../database/workout")

const getAllWorkouts = () => {

const allWorskouts = Workouts.getAllWorkouts()

    return allWorskouts
}
const getOneWorkouts = (workoutId) => {

    const workout = Workouts.getOneWorkouts(workoutId)
    return workout
}

module.exports ={
    getAllWorkouts,
    getOneWorkouts
}