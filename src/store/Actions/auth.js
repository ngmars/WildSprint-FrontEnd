import * as actionTypes from './actionTypes';
import axios from 'axios';
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token,userId,role,name) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        role:role,
        name:name,
        userId:userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData ={
            email:email,
            password:password,
        }
        console.log('SENT');
        axios.post('http://localhost:3001/auth/login',authData)
        .then(response=>{
            console.log('Data came back!');
            console.log(response);
            dispatch(authSuccess(response.data.token,response.data.role,response.data.name,response.data.userId))
        })
        .catch(err=>{
            console.log(err.response.data);
            dispatch(authFail(err.response.data))
        })
    };
};