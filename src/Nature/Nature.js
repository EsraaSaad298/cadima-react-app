import React from 'react';
import NHeader from './NatureHeader';
import '../styling/App.css';

function Nature() {
  return (
    <><div>
      <NHeader />
    </div>
        <iframe 
          width= {window.innerWidth}
          height={window.innerHeight}
          src="https://www.youtube.com/embed/jNo82YnmsgA"
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
          allowfullscreen>
        </iframe></>
  );
}

export default Nature;
