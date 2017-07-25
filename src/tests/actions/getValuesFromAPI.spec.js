import { expect } from '../test_helper';
import { GET_PANEL_VALUES, getPanelValues } from '../../actions'
import ReactDOM from 'react-dom';
import React from 'react';
import sinon from 'sinon';
import axios from 'axios';
import TestUtils from 'react-addons-test-utils';
import { panelValueData } from '../test_data';

// let axiosStub = sinon.stub(axios, 'get').returns() //returns what?

describe('getPanelValues from API', () => {
    let action;

    beforeEach(async () => {
        action = await getPanelValues();
    });
    
    it('has all five expected values', async () => {

        expect(action.payload).to.not.be.empty;
        expect(action.payload).to.have.property("waterTemp" 
            && "airTemp" 
            && "humidity" 
            && "knobValue" 
            && "colorValue");
    });

    it('has the correct type', async () => {

        expect(action.type).to.equal(GET_PANEL_VALUES);
    });

    it('has the payload with correct attribute types', async () => {
        let action = await getPanelValues();

        expect(isNaN(action.payload.airTemp)).to.be.false;
        expect(isNaN(action.payload.waterTemp)).to.be.false;
        expect(isNaN(action.payload.humidity)).to.be.false;
        expect(isNaN(action.payload.knobValue)).to.be.false;
        expect(isNaN(action.payload.colorValue)).to.be.true;
    });
});
