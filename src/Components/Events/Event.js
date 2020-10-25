import React from 'react';
import classes from './Event.css'
const event=(props) =>{
    let image= props.image;
    let name= props.name ;


return(
    <div className="col-md-6 col-lg-4 col-xl-3">
      <figure className="snip1527">
        <div className="image"><img src={image}
            alt="FundraisePicture" /></div>
        <figcaption>
          <div className="date"><span className="day">GO</span><span className="month">FUND!</span></div>
          <h3>{name}</h3>
        </figcaption>
        <a href="#"></a>
      </figure>
    </div>
    );
}