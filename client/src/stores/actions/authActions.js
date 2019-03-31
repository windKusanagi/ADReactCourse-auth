import axios from "axios";
import { AUTH_USER, AUTH_USER_ERR, SIGN_OUT } from "./types";

export const signup = (formProps, callback) => {
    return (dispatch) => {
        axios.post('http://localhost:3090/signup', formProps)
        .then((rsp)=> {
            dispatch({
                type: AUTH_USER,
                payload: rsp.data.token
            })
            localStorage.setItem('token', rsp.data.token)
            callback();
        }).catch((err)=> {
            dispatch({
                type: AUTH_USER_ERR,
                payload: "Email is in use"
            })
        })
    }
}

export const signin = (formProps, callback) => {
    return (dispatch) => {
        axios.post('http://localhost:3090/signin', formProps)
        .then((rsp)=> {
            dispatch({
                type: AUTH_USER,
                payload: rsp.data.token
            })
            localStorage.setItem('token', rsp.data.token)
            callback();
        }).catch((err)=> {
            dispatch({
                type: AUTH_USER_ERR,
                payload: "Sign in error"
            })
        })
    }
}

export const signout = () => {
    localStorage.removeItem('token')
    return {
        type: SIGN_OUT
    }
}