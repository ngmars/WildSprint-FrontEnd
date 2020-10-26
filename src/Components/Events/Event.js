import { render } from '@testing-library/react';
import React from 'react';
import classes from './Event.css'
const event=(props) =>{
    let name= props.name ;
    console.log("JSX ELEMENT",name);

    return(
        <div className="col-md-6 col-lg-4 col-xl-3">
          <figure className="snip1527">
            <div className="image"><img src={require("./horse.jpg")}
                alt="FundraisePicture"/></div>
            <figcaption>
              <div className="date"><span className="day">GO</span><span className="month">FUND!</span></div>
              <h3>{name}</h3>
            </figcaption>
            <a ></a>
          </figure>
        </div>
        );
}

export default event;