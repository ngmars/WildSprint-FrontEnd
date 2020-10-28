import * as actions from '../../../store/Actions/Index';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import Input from '../../../Components/UI/Input/Input';
import Profile from '../../../Components/Profile/Profile';
import EditProfile from '../../../Components/Profile/editProfile';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/SideBar/Sidebar';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileDisp extends Component{
    
    state={
            isEditing:false,
            lastname:{
                elementType: 'input',
                elementConfig: {
                    className:'formcontrol',
                    type: 'text',
                    placeholder: 'text'
                },
                value: '',
                validation: {
                    required: true,
         
                },
                valid: false,
                touched: false
            },
            phone:{
                elementType: 'input',
                elementConfig: {
                    className:'formcontrol',
                    type: 'text',
                    placeholder: 'text'
                },
                value: '',
                validation: {
                    required: true,
                 
                },
                valid: false,
                touched: false
            }
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
            console.log(this.state.lastname.value);
        }
    }

    lastnameInputChangedHandler = (event, controlName) => {
        
        if(this.state.isEditing){
            const updatedLastNameControls = {
                ...this.state.lastname,
                [controlName]: {
                    ...this.state.lastname,
                    value: event.target.value,
                    valid: true,
                    touched: true
                }
            };
        this.setState({lastname: updatedLastNameControls});
        }; 
    }

    phoneInputChangedHandler = (event, controlName) => {
        
        if(this.state.isEditing){
            const updatedPhoneControls = {
                ...this.state.lastname,
                [controlName]: {
                    ...this.state.phone,
                    value: event.target.value,
                    valid: true,
                    touched: true
                }
            };
        this.setState({phone: updatedPhoneControls});
        }; 
    }


    
    render (){
        let formLastnameArray //array for input elements
        if(this.state.isSignIn){  
            formLastnameArray= ( {
                config: this.state.lastname
            });
        }



        let lastnameInput = (formLastnameArray) => (
            <Input
                className={formLastnameArray.config.className}
                elementType={formLastnameArray.config.elementType}
                elementConfig={formLastnameArray.config.elementConfig}
                value={formLastnameArray.config.value}
                invalid={!formLastnameArray.config.valid}
                shouldValidate={formLastnameArray.config.validation}
                touched={formLastnameArray.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formLastnameArray )} />
        );


        let name = this.props.name;
        let email = this.props.email;
        let lastname = this.props.lastname;
        let profession = this.props.profession;
        let phone = this.props.phone;
        let image = this.props.image;
        let imageUrl= 'http://localhost:3001/'+image;
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

                profile = (
                    <div class="emp-profile">
            <table>        
            <tr>
                <td class="colm">
                    <img src={imageUrl} alt="" class="profilepic"/>
                </td> 
                <td class="colm">
                    <h5 class="titlename">{name} {lastname}</h5>           
                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Change Picture"/>
                
                    <div class="details">     
                        <table>
                            <tr>
                                <td><label>Email</label></td>
                                <td><p>{email}</p></td>
                            </tr>
                            <tr>
                                <td><label>First Name</label></td>
                                <td><p>{name}</p></td>
                            </tr>
                            <tr>
                                <td><label>Last Name</label></td>
                                <td>{lastnameInput}</td>
                            </tr>
                            
                            <tr>
                                <td><label>Phone</label></td>
                                <td><p><input type="text" name="" id="" pattern="[0-9]{10}"value={phone}/></p></td>
                            </tr>
                                                       
                        </table>                                 
                    </div>                  
                </td>   
            </tr>
            </table>
    </div>

                )}




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