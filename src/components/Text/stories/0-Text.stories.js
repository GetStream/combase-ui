import React from 'react';
import {
    withKnobs,
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import Text from '../Text';

export default {
    title: 'Components|Text',
    component: Text,
    decorators: [withKnobs],
};

const asOptions = {
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
};

const weightOptions = {
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
    800: '800',
    900: '900',
};

export const Paragraph = () => (
    <Text
        color=""
        as={select('as', asOptions, 'p')}
        size={number('size', 16)}
        faded={boolean('faded', false)}
        weight={select('weight', weightOptions, '400')}
    >
        Hey There! Play around with my props in the Knobs tab.
    </Text>
);
