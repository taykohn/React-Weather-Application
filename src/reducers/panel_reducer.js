import { GET_PANEL_VALUES } from '../actions';

export const initialState = {
    colorValue: "-",
    knobValue: "-",
    airTemp: "-", 
    waterTemp: "-",
    humidity: "-"
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PANEL_VALUES:
            return {
                ...state,
                colorValue: action.payload.colorValue,
                knobValue: action.payload.knobValue,
                airTemp: action.payload.airTemp,
                waterTemp: action.payload.waterTemp,
                humidity: action.payload.humidity
            };
        default:
            return state;
    }
}
