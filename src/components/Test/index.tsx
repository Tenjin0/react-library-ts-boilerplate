import React from "react"

export type TTheme =  "primary" | "secondary"
export interface ITestComponentProps {
	theme: TTheme
}

import "./style.less"

const TestComponent: React.FC<ITestComponentProps> = (props) => {
	return (
		<div
			data-testid="test-component"
			className={`test-component test-component-${props.theme}`}
		>
			<h1 className="heading">I'm the test component</h1>
			<h2>Made with love by Harvey</h2>
		</div>
	)
}

export default TestComponent
