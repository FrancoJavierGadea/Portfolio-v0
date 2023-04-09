import styled from "styled-components";
import Redes from "./Redes";


const StyledFooter = styled.footer`

    background-color: ${({theme}) => theme.isDark ? 'var(--bs-dark)' : 'var(--bs-light)'};

    .footer-content {
        max-width: 700px;
        margin: auto;
    }
`;

function Footer() {

    return (<StyledFooter>

        <div className="footer-content">
            <Redes />
        </div>

    </StyledFooter>);
}

export default Footer;