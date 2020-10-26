import React from 'react';
import classes from './Navbar.css';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-ion/caret-down';
const navbar =(props)=>{
    let name= props.name;

    return (

        <nav className="navbar" id="mainNav" >
        <div className="container">
    
            
    
            <button className="navbar-button" type="button">
            <i class="caret-down">
            <Icon icon={arrowDown} />
            </i>
            </button>
            <div className="collapse" >
                <ul className="nav">
                    
                    <li className="nav-item" role="presentation"><a>{name}</a></li>
                    <li className="nav-drop" role="presentation"><a className="dropdown-toggle active text-white" data-toggle="dropdown" aria-expanded="false" href="#">&nbsp;<img className="rounded-circle" src={require("./tanya 3.jpg")} ></img></a>
                        <div className="dropdown-menu dropdown-menu-right text-left shadow" role="menu" ><a className="dropdown-item" role="presentation" href="#">Change Password</a></div>
                        <div className="dropdown-divider"></div><a className="dropdown-item" role="presentation" href="index.html" >Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )

}

export default navbar;