import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

// Takes a component class with optional props and state
// Returns an object containing:
//   instance - result of renderIntoDocument
//   $el - DOM elements rendered by component
function renderComponent(ComponentClass, props, state) {
    const store = createStore(
        reducers,
        state
    );

    const instance = TestUtils.renderIntoDocument(
        <Provider store={store}>
            <ComponentClass {...props} />
        </Provider>
    );

    const $el = findComponent(instance);

    return {
        instance,
        $el
    };
}

function findComponent(component) {
    return ReactDOM.findDOMNode(component);
}

// extend chai assertions with sinon-chai
chai.use(sinonChai);

export { renderComponent, findComponent, expect };
