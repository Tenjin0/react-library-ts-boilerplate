import React from 'react';

var TestComponent = function (props) {
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + props.theme },
        React.createElement("h1", { className: "heading" }, "I'm the test component"),
        React.createElement("h2", null, "Made with love by Harvey")));
};

export { TestComponent };
//# sourceMappingURL=index.esm.js.map
