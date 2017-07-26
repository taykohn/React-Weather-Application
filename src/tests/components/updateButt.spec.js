import { expect, renderComponent } from '../test_helper';
import TestUtils, { Simulate } from 'react-addons-test-utils';
import UpdateButt from '../../components/updateButt';
import sinon from 'sinon';
import _ from 'lodash';

describe('UpdateButt', () => {
    let component,
        clickSpy;

    beforeEach(() => {
        clickSpy = sinon.spy();
        component = renderComponent(UpdateButt);
    });

    it('renders without crashing', () => {
        expect(true).to.be.true;
    });

    it('renders UpdateButt component', () => {
        let tree = component.instance.props.children;
        let scryResult = TestUtils.isElementOfType(tree, UpdateButt);

        expect(scryResult).to.be.true;
    });
});
