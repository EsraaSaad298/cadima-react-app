import React from "react";
import AHeader from "./AnimationHeader";
import '../styling/App.css';
import video from "./animation.mp4"

function Animations(){
    return(
    <><div>
        <AHeader />
    </div>
    <div style={{width: '100%', height: '100vh'}}>
        <video width= {'100%'} height={'100%'} 
        controls autoPlay = {false} muted playsInline >
           <source src={video} type="video/mp4"/>
        </video>
    </div></>
    );
}

export default Animations;