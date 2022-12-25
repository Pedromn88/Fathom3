import { Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { url } from "../api/api";
import { Joke } from "../api/joke-api-model";
import { ButtonNewJoke } from "../component/buttonRandom";
import { ImgRandom } from "../component/imgRandom";
import { Upper1 } from "../utils/middleware";



// export const getOneJoke = (id: number) => {

export const OneJokeSelection = (props: any) => {
    interface id {
        id: number;
      }

  const [joke, setJoke] = React.useState<Joke>()
  const [visible, setVisible] = React.useState<boolean>(false)
  const [showJoke, setShowJoke] = React.useState<boolean>(false)

  const [id, setId] =React.useState<id>()


  React.useEffect(() => {
    setShowJoke(false)
    if(id !== undefined)
    {    
    fetch(
      url + `${id}`, 
   {   method: 'GET',
            redirect: 'follow',}
    )
      .then((response) => response.json())
      .then((json) => 
     { 
     
      setJoke(json.data)
    }
      )     
      .catch((error) => {console.error("ha habido un error", error)});

}      
}, [id]);  


const handlePunchline = () => {
    setVisible(current=> !current )
    setShowJoke(current=> !current)
}


  return (
  <>

<span className="flex-justify">


<div  className="card-joke" >
 
  <div className="card-joke-img">
  <Image
          
          src="/img/hommer-funny.jpg"
          width={400}
          height={150}
/>

    </div>
    <div className={"card-joke-setup"}>
    <p className={joke?.setup.length > 100 ? "resume-setup" : "normal" }> 
  
    {Upper1(joke?.setup)}
    </p> 
    </div>
    <div className="card-joke-punchline">
{visible && showJoke ? 
 <p>
    {joke?.punchline}
 </p>
  :null
}
</div>
<div className="card-joke-button">
    <Button size="large" onClick={handlePunchline} style={{background:"red", color: "#fff", fontWeight:"600px"}}> Show Punchline</Button>
</div>

</div>

<ButtonNewJoke  setId={setId} setShowJoke={setShowJoke} setVisible={setVisible} /> 

</span>

  </>
  );
};



