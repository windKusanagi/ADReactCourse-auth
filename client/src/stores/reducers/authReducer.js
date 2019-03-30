import { AUTH_USER } from "../actions/types";

const INITIAL_STATE = {
    authenticated: null,
    errMsg: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: action.payload, errMsg: null };
        default:
            return state;
    }
};

export default authReducer;
