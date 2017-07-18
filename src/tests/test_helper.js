// import { $ } from './setup';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import chaiJquery from 'chai-jquery';
import jsdom from 'jsdom';
import jquery from 'jquery';


global.document = jsdom.jsdom(`
<!doctype html>
<html>
    <head>
    </head>
    <body></body>
</html>
`);

global.window = document.defaultView;
let $ = jquery(window);

//builder helper for simulating events
//to add a function to jquery, $.fn.function
$.fn.simulate = function(eventName, value) {
    // 'this' is the jquery element this function was called on
    if (value) {
        this.val(value);
    }

    TestUtils.Simulate[eventName](this[0]);
};

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
    return $(ReactDOM.findDOMNode(component));
}



// set up chai-jquery (from chai jquery docs)
chaiJquery(chai, chai.util, $);

// extend chai assertions with sinon-chai
chai.use(sinonChai);

export { $, renderComponent, findComponent, expect };
