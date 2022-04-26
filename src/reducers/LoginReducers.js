import { USER_LOGIN, USER_LOGOUT, UPDATE_FIELD_AUTH, USER_REGISTER } from '../constants/ActionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN:
        case USER_REGISTER:
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload.errors : null
            };
        case USER_LOGOUT:
        case UPDATE_FIELD_AUTH:
            debugger;
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
    return state;
}