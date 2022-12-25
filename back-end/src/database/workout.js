const DB = require('./db.json')


const getAllWorkouts = () => {
    return DB
}

const getOneWorkouts = (workoutId) => {
    const workout = DB.find((workout) => workout.id == workoutId)

    console.log(DB.id)
if(!workout) {
    return;
}

    return workout
}

module.exports = {
    getAllWorkouts,
    getOneWorkouts

}