//import Event from '../../../Components/Events/Event';
//import axios from 'axios';
import * as actions from '../../../store/Actions/Index';
import Event from '../../../Components/Events/Event';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import React, { Component } from 'react';
import { connect } from 'react-redux';



class Events extends Component {
    state={
        eventNameArr :[]
        
    }
    componentDidMount () {
        this.props.onFetchEvents();
    };
     
    eventsArr= this.props.events.events;
   
    eventExtractor=(eventsArr,eventNameArr)=>{
        for (let i=0;i<eventsArr.length;i++){
            console.log(i);
            eventNameArr.push(eventsArr[i].name);
            console.log('EVENT NAME',eventNameArr) 
        }
    }
        

    render(){
        //let eventsArr = this.props.events.events;
    //console.log(eventsArr.length,"THIS IS MAIN");
    let events = <Spinner/>;
    if ( !this.props.loading ) {
        let eventsArr= this.props.events.events;
        for (let i=0;i<eventsArr.length;i++){
            console.log(i);
            this.state.eventNameArr.push({
                name: eventsArr[i].name}
                );
            console.log('EVENT NAME',this.state.eventNameArr) 
        }
    events = this.state.eventNameArr.map( event => (
        
        <Event
         name={event.name}
           />
        ))
    }
       
        return(
            <div>
                <div class="fund-pics row">
                <div>{events}</div>
                </div>
            </div>

        )
    }
}


const mapSignInDispatchToProps =dispatch => {
  
    return{
        onFetchEvents:() =>dispatch(actions.fetchEvents())
    };
};
const mapStatetoProps = state =>{
    console.log('main page',state)
    return {
        events:state.events
    };
};


export default connect(mapStatetoProps, mapSignInDispatchToProps)(Events);