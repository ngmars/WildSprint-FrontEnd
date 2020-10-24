import * as actionTypes from './actionTypes';
import axios from 'axios';

export const SignUpstart =() =>{
    return {
        type: actionTypes.SIGNUP_START
    };
};

export const SignUpSuccess =() =>{
    return {
        type:actionTypes.SIGNUP_SUCCESS
    };
};

export const SignUpFail = (error) =>{
    return{
        type: actionTypes.SIGNUP_FAIL,
        error: error
    };
};


export const SignUp =(email,name,password)=>{
    return dispatch=>{
    dispatch(SignUpstart());
    const SignUpData ={
        email:email,
        name:name,
        password:password,
        role:'organiser'
    }
    console.log('SignUpData');
    console.log('SENT');
    let url = 'http://localhost:3001/auth/SignUp'
    axios.post(url,SignUpData)
    .then(response=>{
        console.log('Reg Success');
        dispatch(SignUpSuccess())
    })
    .catch(err=>{
        console.log(err.response.data);
        dispatch(SignUpFail(err.response.data))
    });
    };
}