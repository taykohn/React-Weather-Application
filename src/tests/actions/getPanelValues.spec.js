import { expect } from '../test_helper';
import { GET_PANEL_VALUES, getPanelValues } from '../../actions'
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('getPanelValues', () => {
    let expectedAction;

    beforeEach(() => {
        expectedAction = {
            type: GET_PANEL_VALUES,
            payload: {
                airTemp: 103,
                waterTemp: 71,
                humidity: 24,
                colorValue: "GREEN",
                knobValue: 12
            }
        };
    });

    it('has the correct type', async () => {
        let action = await getPanelValues();

        expect(action.type).to.equal(expectedAction.type);
    });

    it('has the payload with correct attribute types', async () => {
        let action = await getPanelValues();

        expect(action.payload).to.not.be.empty;
        expect(isNaN(action.payload.airTemp)).to.be.false;
        expect(isNaN(action.payload.waterTemp)).to.be.false;
        expect(isNaN(action.payload.humidity)).to.be.false;
        expect(isNaN(action.payload.knobValue)).to.be.false;
        expect(isNaN(action.payload.colorValue)).to.be.true;
    });
});

