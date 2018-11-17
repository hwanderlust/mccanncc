import React, { memo } from 'react';


const TilePic = memo(({ picture, alt, handleOnload, handleOnError, description }) => {
  
  return (
    <figure className='pic-container'>

      {
        !description ? 

        <img className='tile-pic' src={picture} onLoad={handleOnload} alt={alt} onError={handleOnError} /> 
        
        : <p className='tile-desc'>{description}</p>
      }
    
    </figure>
  )
});

export default TilePic;