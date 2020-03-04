import React, { useCallback, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { TwitterPicker } from 'react-color';

const Undersheet = styled.div`
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const ColorInput = ({ name, onChange, value, ...props }) => {
    const [show, toggle] = useState(false);
    const handleChange = useCallback(
        color => {
            toggle(!show);
            return onChange({
                target: {
                    name,
                    value: color.hex,
                },
            });
        },
        [name, onChange, show]
    );

    const togglePicker = useCallback(() => {
        toggle(!show);
    }, [show]);

    const popoverRef = useRef();

    const handleClose = useCallback(e => {
        toggle(false);
    }, []);

    const popoverStyle = useMemo(
        () => ({
            position: 'absolute',
            top: '100%',
            zIndex: 10,
        }),
        []
    );

    return (
        <div>
            <Input
                {...props}
                {...{ value }}
                onClick={!show ? togglePicker : null}
                disabled
            />
            {show ? <Undersheet onClick={handleClose} /> : null}
            {show ? (
                <div id="popoverWrapper" ref={popoverRef} style={popoverStyle}>
                    <TwitterPicker
                        onChangeComplete={handleChange}
                        color={value}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default ColorInput;
