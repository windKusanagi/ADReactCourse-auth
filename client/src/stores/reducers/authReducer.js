import { AUTH_USER, AUTH_USER_ERR, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    authenticated: null,
    errMsg: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: action.payload, errMsg: null };
        case AUTH_USER_ERR:
            return { ...state, errMsg: action.payload}
        case SIGN_OUT:
            return {
                authenticated: null,
                errMsg: null
            }
        default:
            return state;
    }
};

export default authReducer;
