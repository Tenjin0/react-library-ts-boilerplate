import React from "react";
export interface ITestComponentProps {
    theme: "primary" | "secondary";
}
import "./style.less";
declare const TestComponent: React.FC<ITestComponentProps>;
export default TestComponent;
