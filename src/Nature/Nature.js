import React from 'react';
import NHeader from './NatureHeader';
import '../styling/App.css';
import video from "./nature.mp4"

function Nature() {
  return (
    <><div>
      <NHeader />
    </div>
    <div style={{width: '100%', height: '100vh'}}>
        <video width= {'100%'} height={'100%'} 
        controls autoPlay = {false} muted playsInline >
           <source src={video} type="video/mp4"/>
        </video>
    </div></>
  );
}

export default Nature;
