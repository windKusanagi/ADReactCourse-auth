import axios from "axios";
import { AUTH_USER } from "./types";

export const signup = (formProps) => {
    return (dispatch) => {
        axios.post('http://localhost:3090/signup', formProps)
        .then((rsp)=> {
            dispatch({
                type: AUTH_USER,
                payload: rsp.data.token
            })
        }).catch((err)=> {
            console.log(err);
        })
    }
}