import * as actions from '../../../store/Actions/Index';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import Profile from '../../../Components/Profile/Profile';
import EditProfile from '../../../Components/Profile/editProfile';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/SideBar/Sidebar';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileDisp extends Component{
    state={
            isEditing:false,
            controls_signIn: {
                lastname: {
                    elementType: 'input',
                    elementConfig: {
                        className:'formcontrol',
                        type: 'text',
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        className:'formcontrol',
                        type: 'text',
                        placeholder: 'text'
                    },
                    value: '',
                    validation: {
                        required: true,
                        Length: 10
                    },
                    valid: false,
                    touched: false
                
                }
            },
    }

    componentDidMount () {
        let token = localStorage.getItem('token')
        let userId = localStorage.getItem('userId')
        this.props.onFetchEvents(token,userId);
        
    };
    switchEditHandler =()=>{
        this.setState(prevState=>{
                return {isEditing: !prevState.isEditing}
        })
    };
    submitHandler = (event) => {
        if(this.state.isEditing){
            event.preventDefault();
            this.props.onAuth(this.state.controls_signIn.email.value, this.state.controls_signIn.password.value);
        }
    }
    render (){
        const formElementsArray = []; //array for input elements
        if(this.state.isSignIn){
        for ( let key in this.state.controls_signIn ) {  // render input elements from array
            formElementsArray.push( {
                id: key,
                config: this.state.controls_signIn[key]
            });
        }
        }
        let name = this.props.name;
        let email = this.props.email;
        let lastname = this.props.lastname;
        let profession = this.props.profession;
        let phone = this.props.phone;
        let image = this.props.image;
        console.log(image);
        let sidebar = <Sidebar role = {localStorage.getItem('role')}/>;
        let navbar =  <Navbar name ={localStorage.getItem('name')}/>;
        let isAuth
         if(!localStorage.getItem('token')){
            return (
                isAuth = <Redirect to ='/'/>
            )
        }
        
       
        let profile;
        if (!this.state.isEditing){
        profile =(<Profile
                            name={name} 
                            lastname={lastname}
                            email={email}
                            profession={profession}
                            phone={phone}
                            image ={image}
                />);
            }else{
                profile =(<EditProfile
                    name={name} 
                    lastname={lastname}
                    email={email}
                    profession={profession}
                    phone={phone}
                    image ={image}
                    />);
            }
            let stateButton ;
              if (!this.state.isEditing){ 
            stateButton =( <input onClick={this.switchEditHandler}type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>)}
            else{
                stateButton =( <input onClick={this.switchEditHandler}type="submit" class="profile-edit-btn" name="btnAddMore" value="Submit"/>)}
            
        console.log('just the name,Im main',this.props.name)
        return(
        <div>
            {navbar}
            {sidebar}
            {profile}
            {stateButton}
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
        image: state.profile.events.photo
    };
};


export default connect(mapStatetoProps, mapSignInDispatchToProps)(ProfileDisp);