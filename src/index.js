'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TestComponent = function (props) {
    return (React__default['default'].createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + props.theme },
        React__default['default'].createElement("h1", { className: "heading" }, "I'm the test component"),
        React__default['default'].createElement("h2", null, "Made with love by Harvey")));
};

exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
