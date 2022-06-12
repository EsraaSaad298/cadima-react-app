import React, { useEffect, useState } from "react";
import Header from './Header';
import '../styling/App.css';

function Home(){
  
    return(
    <><div>
      <Header />
    </div>
        <iframe 
          width= {window.innerWidth}
          height={window.innerHeight}
          src="https://www.youtube.com/embed/Jv-AxyN7HFk" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
          allowfullscreen>
        </iframe></>

    );
}

export default Home;