//import Event from '../../../Components/Events/Event';
//import axios from 'axios';
import * as actions from '../../../store/Actions/Index';
import Event from '../../../Components/Events/Event';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/SideBar/Sidebar';
import React, { Component } from 'react';
import { connect } from 'react-redux';



class Events extends Component {
    state={
        eventNameArr :[]
        
    }
    componentDidMount () {
        let token = localStorage.getItem('token')
    
        this.props.onFetchEvents(token);
    };

    render(){
    //let eventsArr = this.props.events.events;
    //console.log(eventsArr.length,"THIS IS MAIN");
    let sidebar = <Sidebar role = {localStorage.getItem('role')}/>;
    let navbar =  <Navbar name ={localStorage.getItem('name')}/>;

    let events = <Spinner/>;
    if ( !this.props.loading ) {
        let eventsArr= this.props.events.events;
        for (let i=0;i<eventsArr.length;i++){
            //console.log(i);
            this.state.eventNameArr.push({
                name: eventsArr[i].name,
                image: eventsArr[i].image
            });
         console.log('EVENT NAME',this.state.eventNameArr) 
        }
    
    events = this.state.eventNameArr.map( event => (
     
        <Event
         name={event.name}
         image={event.image}
           />
        ))
    }
    let TokenExpRedirect = null;
    if (!localStorage.getItem('token')){
        TokenExpRedirect =<Redirect to ='/'/>
    }
       
        return(
            <div>
                {navbar}
                {sidebar}
                <div class="fund-pics row">
                <div>{events}</div>
                {TokenExpRedirect}
                </div>
                
            </div>

        )
    }
}


const mapSignInDispatchToProps =dispatch => {
  
    return{
        onFetchEvents:(token) =>dispatch(actions.fetchEvents(token))
    };
};
const mapStatetoProps = state =>{
    console.log('main page',state)
    return {
        events:state.events,
        loading:state.events.loading,
        token:state.auth.token
    };
};


export default connect(mapStatetoProps, mapSignInDispatchToProps)(Events);