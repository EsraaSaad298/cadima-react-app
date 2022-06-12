import React from "react";
import Header from './Header';
import '../styling/App.css';
import video from "./home.mp4"

function Home(){
  
    return(
    <><div>
      <Header />
    </div>
    <div style={{width: '100%', height: '100vh'}}>
        <video width= {'100%'} height={'100%'} 
        controls autoPlay = {false} muted playsInline >
           <source src={video} type="video/mp4"/>
        </video>
    </div></>
    );
}

export default Home;