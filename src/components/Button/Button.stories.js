import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Components|Button',
  component: Button,
};

export const Standard = () => <Button label="Click Me" onClick={action('clicked')} />;
export const Flat = () => <Button flat label="Click Me" onClick={action('clicked')} />;
