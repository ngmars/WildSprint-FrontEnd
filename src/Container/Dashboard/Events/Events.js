//import Event from '../../../Components/Events/Event';
//import axios from 'axios';
import * as actions from '../../../store/Actions/Index';

import React, { Component } from 'react';
import { connect } from 'react-redux';





class Events extends Component{
    componentDidMount () {
        this.props.onFetchEvents()
}
    render(){
        
        console.log(this.props.events,"THIS IS MAIN")
   
        return(
            <div>Luzrr</div>
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