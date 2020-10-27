import * as actions from '../../../store/Actions/Index';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import Profile from '../../../Components/Profile/Profile';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/SideBar/Sidebar';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileDisp extends Component{

    componentDidMount () {
        let token = localStorage.getItem('token')
        let userId = localStorage.getItem('userId')
        this.props.onFetchEvents(token,userId);
        
    };
    render (){
        let name = this.props.name;
        let email = this.props.email;
        let lastname = this.props.lastname;
        let profession = this.props.profession;
        let phone = this.props.phone;
        let sidebar = <Sidebar role = {localStorage.getItem('role')}/>;
        let navbar =  <Navbar name ={localStorage.getItem('name')}/>;
        let isAuth
         if(!localStorage.getItem('token')){
            return (
                isAuth = <Redirect to ='/'/>
            )
        }
        let profile =(<Profile
                            name={name} 
                            lastname={lastname}
                            email={email}
                            profession={profession}
                            phone={phone}
                />)
         
         ;
        console.log('just the name,Im main',this.props.name)
        return(
        <div>
            {navbar}
            {sidebar}
            {profile }
            {isAuth}
        </div> 
            
            )
        
    }
    
}

const mapSignInDispatchToProps =dispatch => {
  
    return{
        onFetchEvents:(token,userId) =>dispatch(actions.fetchProfile(token,userId))
    };
};

const mapStatetoProps = state =>{
    console.log('main page',state)
    console.log("down in the props",state.profile.events)
    return {
        name:state.profile.events.fname,
        lastname:state.profile.events.lastname,
        phone:state.profile.events.phone,
        email:state.profile.events.email,
        profession:state.profile.events.profession,
    };
};


export default connect(mapStatetoProps, mapSignInDispatchToProps)(ProfileDisp);