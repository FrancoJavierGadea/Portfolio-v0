import { Form } from "react-bootstrap";
import styled from "styled-components";


const StyledSwitch = styled.div`

    .form-switch .form-check-input {
        --size: 25px;
        width: calc(2 * var(--size));
        height: var(--size);
        margin: 0 10px;
        position: relative;
    }
    .form-switch .form-check-input:focus {

        box-shadow: none;
    }

    /*dark theme icon*/
    .form-switch .form-check-input::before {
        content: "\f495";
        color: white;
        font-family: 'bootstrap-icons';
        display: none;
        position: absolute;
        left: 5px;
        top: 0;
    }
    .form-switch .form-check-input:checked::before {
        
        display: inline-block;
    }
    
    /*light theme icon*/
    .form-switch .form-check-input::after {
        content: "\f1D1";
        color: #f6fb00;
        font-family: 'bootstrap-icons';
        display: inline-block;
        position: absolute;
        right: 5px;
        top: 0;
    }
    .form-switch .form-check-input:checked::after {
        display: none;
    }
`;

function ThemeSwitch({theme = 'light', onChange = () => {}}) {


    return (<StyledSwitch>

        <Form.Switch onChange={onChange} checked={theme.mode === 'light'} />

    </StyledSwitch>);
}

export default ThemeSwitch;