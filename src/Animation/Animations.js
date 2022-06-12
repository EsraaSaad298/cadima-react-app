import React from "react";
import AHeader from "./AnimationHeader";
import '../styling/App.css';

function Animations(){
    return(
    <><div>
        <AHeader />
    </div>
        <iframe 
            width= {window.innerWidth}
            height={window.innerHeight}
            src="https://www.youtube.com/embed/07d2dXHYb94" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
            allowfullscreen>
        </iframe></>
    );
}

export default Animations;