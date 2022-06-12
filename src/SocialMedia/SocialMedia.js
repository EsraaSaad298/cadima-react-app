import React from "react";
import SHeader from "./SocialMediaHeader";
import '../styling/App.css';
import video from "./socialmedia.mp4"

function SocialMedia(){
    return(
        <><div>
            <SHeader />
        </div>
        <div style={{width: '100%', height: '100vh'}}>
        <video width= {'100%'} height={'100%'} 
        controls autoPlay = {false} muted playsInline >
           <source src={video} type="video/mp4"/>
        </video>
    </div></>
        );
}

export default SocialMedia;