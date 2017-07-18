import { GET_RANDOM_NUMBERS } from '../actions';

const initialState = {
    colorValue: 0,
    knobValue: 0,
    airTemp: 0,
    waterTemp: 0,
    humidity: 0
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RANDOM_NUMBERS:
            return {
                ...state, 
                colorValue: action.payload.colorValue,
                knobValue: action.payload.knobValue,
                airTemp: action.payload.airTemp,
                waterTemp: action.payload.waterTemp,
                humidity: action.payload.humidity
            }
        default:
            return state;
    }
}
