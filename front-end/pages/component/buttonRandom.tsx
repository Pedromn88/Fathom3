import { Button } from "@mui/material";
import React from "react";


export const numberRandom = (min: number, max: number) => {

    return Math.floor(Math.random()*(max - min +1) + min)


}

export const ButtonNewJoke = (props:any) => {
const handleNumber = () => {
    props?.setVisible(false)
    props?.setShowJoke(false)
   props?.setId(numberRandom(1, 80))
}


return (
    <Button variant="outlined" size="large" className="button-random"  style={{background:"red", color: "#fff", padding:"5px 15px", width: "400px", fontWeight:"800"}}  onClick={handleNumber} > A new Joke!</Button>

)


}