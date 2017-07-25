import { expect, renderComponent } from '../test_helper';
import TestUtils from 'react-addons-test-utils';
import CardList from '../../components/cardList';

describe('CardList', () => {

    let component,
        componentWithProps;

    beforeEach(() => {
        component = renderComponent(CardList);
        componentWithProps = renderComponent(CardList, {colorValue: 1, 
            knobValue: 2,
            airTemp: 3,
            waterTemp: 4,
            humidity: 5
        });
    });

    it('renders without crashing', () => {
        expect(true).to.be.true;
    });

    it('renders CardList component', () => {
        let tree = component.instance;
        let scryResult = TestUtils.scryRenderedComponentsWithType(tree, CardList);

        expect(scryResult).to.not.be.empty;
    });

    it('renders CardList component with properties', () =>{
        let tree = componentWithProps.instance;
        let scryWithProps = TestUtils.scryRenderedComponentsWithType(tree, CardList); 
        let scryProps = scryWithProps[0].props;

        expect(scryProps).to.not.be.empty;
        expect(scryProps).contains({ colorValue: 1,
            knobValue: 2,
            airTemp: 3,
            waterTemp: 4,
            humidity: 5 });
    });

});