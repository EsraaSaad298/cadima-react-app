import React from "react";
import SHeader from "./SocialMediaHeader";
import '../styling/App.css';

function SocialMedia(){
    return(
        <><div>
            <SHeader />
        </div>
            <iframe 
                width= {window.innerWidth}
                height={window.innerHeight}
                src="https://www.youtube.com/embed/f99ERZlTxFA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
                allowfullscreen>
            </iframe></>
        );
}

export default SocialMedia;