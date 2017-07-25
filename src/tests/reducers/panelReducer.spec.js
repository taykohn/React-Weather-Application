import { expect } from '../test_helper';
import { GET_PANEL_VALUES } from '../../actions';
import panelReducer, { initialState } from '../../reducers/panel_reducer';

describe('PanelReducer', () => {

    it('handles action with unknown type', () => {
        expect(panelReducer(undefined, {})).to.eql(initialState);
    });

    it('handles action with type GET_PANEL_VALUES', () => {

        const payload = {
            airTemp: 66,
            waterTemp: 72,
            humidity: 48,
            colorValue: 'WHITE',
            knobValue: 12
        };
        const action = {
            type: GET_PANEL_VALUES,
            payload: payload
        };

        const result = panelReducer(undefined, action);

        expect(result.colorValue).equals('WHITE');
        expect(result.airTemp).equals(66);
        expect(result.waterTemp).equals(72);
        expect(result.humidity).equals(48);
        expect(result.knobValue).equals(12);

    });

});
