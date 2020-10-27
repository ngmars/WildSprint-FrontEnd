import { render } from '@testing-library/react';
import React from 'react';
import classes from './Profile.css'
import axios from 'axios';

const profile=(props) =>{
    let name = props.name;
        let email = props.email;
        let lastname = props.lastname;
        let profession = props.profession;
        let phone = props.phone;

    return(
        <div className="dummy">
        <div className="emp-profile">
                <table>        
                    <td className="colm">
                        <img src={require("./tanya 3.jpg")} alt="" className="profilepic"/>
                    </td> 
                    <td className="colm">
                        <h5>{name}</h5>           
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Change Picture"/>
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    
                        <div className="details">     
                            <label>First Name</label>
                            <p>{name}</p>
                            <label>Last Name</label>
                            <p>{lastname}</p>
                            <label>Email</label>
                            <p>{email}</p>
                            <label>Phone</label>
                            <p>{phone}</p>
                            <label>Profession</label>
                            <p>{profession}</p>      
                        </div>                  
                    </td>   
                </table>
        </div>
    </div>
    )
}
export default profile;