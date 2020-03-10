import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { animated, interpolate } from 'react-spring';
import Text from '../Text';

// HOCs //
import asInput from './asInput';

// Components //
import HelperRow from './HelperRow';

const Root = styled.div``;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: ${({ theme }) => theme.borderRadius}px;
    border: 2px solid
        ${({ focused, hasValue, theme }) =>
            hasValue || focused ? theme.color.primary : theme.color.border};

    &:hover {
        border-color: ${({ focused, hasValue, theme }) =>
            hasValue || focused
                ? theme.color.primary
                : theme.colorUtils.darken(theme.color.border, 0.05)};
    }
`;

const Field = styled.input`
    flex: 1;
    padding: 24px 16px;
    font-size: 16px;
    font-weight: 500;
`;

const LabelWrapper = styled.div`
    position: absolute;
    top: -8px;
    left: 16px;
`;

const Label = styled(Text)`
    transform-origin: top left;
    pointer-events: none;
    user-select: none;
`;

const LabelBg = styled(animated.div)`
    position: absolute;
    left: -4px;
    right: -4px;
    height: 12px;
    background-color: ${({ theme }) => theme.color.surface};
    transform-origin: center;
`;

const IconWrapper = styled.div`
    padding: 16px;
    justify-content: center;
    align-items: center;
`;

const Input = ({
    error,
    focused,
    hasValue,
    helperText,
    icon: Icon,
    inputProps,
    labelAnim,
    label,
    ...rest
}) => {
    const hasIcon = !!Icon;
    const [labelDims, setLabelDims] = useState();
    const labelRef = useCallback(
        el => {
            if (el && !labelDims) {
                const dims = el.getBoundingClientRect();
                setLabelDims(dims);
            }
        },
        [labelDims]
    );

    const labelStyle = useMemo(
        () => ({
            transform: interpolate(
                [
                    labelAnim.translate.interpolate({
                        range: [0, 1],
                        output: [32, 0],
                    }),
                    labelAnim.translate.interpolate({
                        range: [0, 1],
                        output: [hasIcon ? 40 : 16, 0],
                    }),
                    labelAnim.scale.interpolate({
                        range: [0, 1],
                        output: [1.3333333333, 1],
                    }),
                ],
                (translateY, translateX, scale) =>
                    `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`
            ),
        }),
        [labelAnim.translate, labelAnim.scale]
    );

    const labelBgStyle = useMemo(
        () => ({
            transform: labelAnim.scale
                .interpolate({
                    range: [0, 1],
                    output: [0, 1],
                    extrapolate: 'clamp',
                })
                .interpolate(v => `scaleX(${v})`),
        }),
        [labelAnim.scale]
    );

    return (
        <Root {...rest}>
            <Wrapper {...{ focused, hasValue }}>
                {Icon ? (
                    <IconWrapper>
                        <Icon size={24} color="text" />
                    </IconWrapper>
                ) : null}
                <Field {...inputProps} />
                {label ? (
                    <LabelWrapper {...{ hasIcon }}>
                        <LabelBg
                            style={labelBgStyle}
                            width={labelDims ? labelDims.width + 4 : 0}
                        />
                        <Label
                            ref={labelRef}
                            color={focused || hasValue ? 'primary' : 'alt_text'}
                            as={animated.p}
                            weight="500"
                            size={12}
                            style={labelStyle}
                            faded={!hasValue && !focused}
                        >
                            {label}
                        </Label>
                    </LabelWrapper>
                ) : null}
            </Wrapper>
            <HelperRow {...{ error, helperText }} />
        </Root>
    );
};

export default asInput(Input);
