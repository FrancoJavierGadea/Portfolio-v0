import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import useBreakPoints from "../hooks/useBreakpoints";
import Background from "./Background";


const StyledNavbar = styled.div`

    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
    //background-color: ${({theme}) => theme.isDark ? 'var(--bs-dark)' : 'var(--bs-light)'};

    .Background {
        position: relative;
        overflow: hidden;
    }
    .Background video {
        position: absolute;
    }
`;

function Navigation({children}) {

    const [isLG] = useBreakPoints('lg');

    return (<StyledNavbar>
        <Background>
            <Navbar variant="" expand="lg">
                <Container>
                    <Navbar.Brand href="#"></Navbar.Brand>

                    <div className="d-flex align-items-center">
                        { !isLG && <div>{children}</div> }
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>


                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#Inicio">Inicio</Nav.Link>

                            <Nav.Link href="#Proyectos">Proyectos</Nav.Link>

                            <Nav.Link href="#Skills">Skills</Nav.Link>  
                        </Nav>
                    </Navbar.Collapse>
    
                    { isLG && <div>{children}</div> }

                </Container>
            </Navbar>     
        </Background>
    </StyledNavbar>);
}

export default Navigation;