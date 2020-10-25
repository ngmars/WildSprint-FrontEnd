import * as actionTypes from '../Actions/actionTypesSignUp';
import { updateObject } from '../utils';


const initialState ={
    email:null,
    name:null,
    role:null,
    password: null,
    error: null,
    loading:false
};
const SignUpstart  =(state,action) =>{
    console.log('hello');
    return updateObject(state,{error:null,loading:true})
};

const SignUpSuccess =(state,action)=>{
    console.log(action);
    return updateObject(state,{
        email:action.email,
        role:action.role,
        name:action.name,
        password:action.password,
        error:null,
        loading:false
    });
};


const SignUpFail =(state,action)=>{
    console.log('SENT DATA red',action.error)
    return updateObject(state,{
        error:action.error,
        loading: false
    });
} ;



const reducer = (state=initialState,action)=>{
    console.log("SWITCH",action)
    switch(action.type){
     case actionTypes.SIGNUP_START:return SignUpstart(state,action)
     case actionTypes.SIGNUP_SUCCESS:return SignUpSuccess(state,action) 
     case actionTypes.SIGNUP_FAIL:return SignUpFail(state,action)   
    default:
        return state;
    }

}

export default reducer;