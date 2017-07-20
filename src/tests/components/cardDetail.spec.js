import { expect, renderComponent } from '../test_helper';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CardDetail from '../../components/cardDetail';

describe('CardDetail', () => {
    let component,
        componentWithProps;

    beforeEach(() => {
        component = renderComponent(CardDetail);
        componentWithProps = renderComponent(CardDetail, {title: "Temperature", value: 65});
    });


    it('renders without crashing', () => {
        expect(true).to.be.true
    });

    it('renders CardDetail component', () => {
        let tree = component.instance.props.children;
        let scryResult = TestUtils.isElementOfType(tree, CardDetail);
        console.log("SCRY: ", scryResult);

        expect(scryResult).to.be.true;
    });

    it('renders CardDetail component with properties', () =>{
        let componentProps = componentWithProps.instance.props.children.props;

        expect(componentProps).to.not.be.empty;
        expect(componentProps).contains({ title: "Temperature",
            value: 65 });
    });
});
