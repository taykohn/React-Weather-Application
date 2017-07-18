import { combineReducers } from 'redux';
import PanelReducer from './panel_reducer';

const rootReducer = combineReducers({
    panels: PanelReducer
});

export default rootReducer;
