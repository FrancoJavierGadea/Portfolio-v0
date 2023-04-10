import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import useBreakPoints from "../hooks/useBreakpoints";
import Background from "./Background";
import { useEffect, useState } from "react";


const StyledNavbar = styled.div`

    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
    
    .Background {
        position: relative;
        overflow: hidden;
        background-color: ${({theme}) => theme.isDark ? 'transparent' : 'var(--bs-body-bg)'};
    }
    .Background video {
        position: absolute;
    }
`;

function Navigation({children}) {

    const [isLG] = useBreakPoints('lg');

    const [location, setLocation] = useState(undefined);

    useEffect(() => {

		const listener = () => {

			if(window.location.hash){

                console.log('1')

                setLocation(undefined);

				window.location.hash = '';
			}
		}
		
		document.addEventListener('wheel', listener);

		return () => {

			document.removeEventListener('wheel', listener);
		}

	}, []);


    const handlerSelect = (value) => {

        setLocation(value);
    }

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
                        <Nav className="ms-auto" activeKey={location} onSelect={handlerSelect}>
                            <Nav.Link href="#Inicio" eventKey="Inicio">Inicio</Nav.Link>

                            <Nav.Link href="#Proyectos" eventKey="Proyectos">Proyectos</Nav.Link>

                            <Nav.Link href="#Tecnologias" eventKey="Tecnologias">Tecnologias</Nav.Link>  
                        </Nav>
                    </Navbar.Collapse>
    
                    { isLG && <div>{children}</div> }

                </Container>
            </Navbar>     
        </Background>
    </StyledNavbar>);
}

export default Navigation;