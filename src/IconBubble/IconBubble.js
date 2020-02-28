import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components //
const Root = styled.div`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: ${({ color, theme, twotone }) =>
        theme.colorUtils.fade(theme.color[color], twotone ? 0.24 : 1)};
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

const IconBubble = ({ color, icon: Icon, iconColor, size, twotone }) => (
    <Root {...{ color, size, twotone }}>
        {Icon ? (
            <Icon color={twotone ? color : iconColor} size={size / 2} />
        ) : null}
    </Root>
);

IconBubble.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.func,
    iconColor: PropTypes.string,
    size: PropTypes.number,
    twotone: PropTypes.bool,
};

IconBubble.defaultProps = {
    color: 'primary',
    iconColor: 'surface',
    size: 56,
    twotone: false,
};

export default IconBubble;
