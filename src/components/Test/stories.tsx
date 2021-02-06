import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';

import TestComponent, { TTheme } from './index';

export default {
  title: "TestComponent"
};

export const Primary = () => <TestComponent theme="primary" />;

export const Secondary = () => <TestComponent theme="secondary" />;

const themes = {
  primary: 'primary',
  secondary: 'secondary',
};
storiesOf('Custom', module)
 .addDecorator(withKnobs)
 .add('with theme', () => (
		<TestComponent theme={select('theme', themes, "primary", 'GROUP-ID1') as TTheme} />
	))
