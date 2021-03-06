import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import reducer from './reducer';

const initialState = {
    focused: false,
    hasValue: false,
};

const isValid = value =>
    value !== '' &&
    value !== undefined &&
    value !== null &&
    !(Array.isArray(value) && value.length === 0);

const asInput = WrappedComponent => ({
    disabled,
    error,
    helperText,
    label,
    maxLength,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    type,
    value,
    ...props
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleBlur = useCallback(
        e => {
            if (disabled) return;

            dispatch({ type: 'Input/Blur' });

            if (onBlur) onBlur(e);
        },
        [disabled, onBlur]
    );

    useEffect(() => {
        if (value) {
            dispatch({
                type: 'Input/Change',
                hasValue: isValid(value),
            });
        } else {
            dispatch({
                type: 'Input/Change',
                hasValue: false,
            });
        }
    }, [value]);

    const handleFocus = useCallback(
        e => {
            if (disabled) return;
            dispatch({ type: 'Input/Focus' });
            if (onFocus) onFocus(e);
        },
        [disabled, onFocus]
    );

    const inputProps = useMemo(
        () => ({
            disabled,
            maxLength,
            name,
            onBlur: handleBlur,
            onChange,
            onFocus: handleFocus,
            type,
            value,
        }),
        [
            disabled,
            maxLength,
            name,
            handleBlur,
            handleFocus,
            onChange,
            type,
            value,
        ]
    );

    const labelAnim = useSpring({
        value: state.hasValue || state.focused ? 1 : 0,
        config: { mass: 1, tension: 500, friction: 30 },
    });

    return (
        <WrappedComponent
            {...props}
            {...state}
            {...{ error, helperText, labelAnim, inputProps }}
            label={placeholder || label}
        />
    );
};

asInput.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    maxLength: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default asInput;
