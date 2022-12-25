const express = require("express")
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")
var cors = require('cors')
 
const app = express()

const PORT = 8081
app.use(cors())

app.use("/api/v1", v1WorkoutRouter)



app.listen(PORT, () => {console.log(`Funcionando en el puerto ${PORT}`)})

