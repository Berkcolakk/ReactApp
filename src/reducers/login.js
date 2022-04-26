import { LOGIN, LOGOUT, UPDATE_FIELD_AUTH, REGISTER } from '../constants/ActionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload.errors : null
            };
        case LOGOUT:
        case UPDATE_FIELD_AUTH:
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
    return state;
}