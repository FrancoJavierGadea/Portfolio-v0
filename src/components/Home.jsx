
import styled from "styled-components";
import image from "../assets/perfil-2.png";
import Redes from "./Redes";
import { Col, Row } from "react-bootstrap";
import useBreakPoints from "../hooks/useBreakpoints";

const StyledDiv = styled.div`

    --dark-filters: brightness(130%) drop-shadow(7px 7px 5px rgba(0, 0, 0, 0.6));

    .perfil {
        display: block;
        margin: auto;
        width: 270px;
        height: 270px;
        object-fit: scale-down;
        border-radius: 50%;

        filter: ${({theme}) => theme.isDark ? 'var(--dark-filters)' : 'initial'};

        backdrop-filter: ${({theme}) => theme.isDark ? 'drop-shadow(4px 4px 10px blue)' : 'contrast(0.7)'};

        box-shadow: 0px 0px 7px ${({theme}) => theme.isDark ? '#fffdff47' : '#00000047'};
    }

    .name {
        text-align: center;

        filter: ${({theme}) => theme.isDark ? 'var(--dark-filters)' : 'initial'};
    }

    p {
        font-size: 18px;
        filter: ${({theme}) => theme.isDark ? 'var(--dark-filters)' : 'initial'};
    }
`;

function Home() {

    const [isLG] = useBreakPoints('lg');

    return (<section className="Inicio my-5" id="Inicio" style={{scrollMarginTop: isLG ? 100 : 200}}>

        <StyledDiv className="container">

            <Row>
                <Col xs={12} md={5}>
                    <img className="perfil" src={image} alt="Imagen de perfil" />

                    <h1 className="name mt-2">Franco Javier Alvarez</h1>

                    <Redes />
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs={12} md={9}>
                    <p>
                        <strong>Desarrollador web Fullstack</strong> con habilidades en el <strong>frontend</strong> y el <strong>backend</strong>. 
                    </p>

                    <p>
                        Mi interés en el <strong>desarrollo web</strong> se centra en crear <strong>soluciones creativas e innovadoras</strong> que mejoren la vida de las personas y hagan crecer los negocios.
                        Me mantengo actualizado en las <strong>últimas tecnologías y tendencias</strong> de industria para crear aplicaciones eficientes y escalables...
                    </p>

                    <p>
                        En mi <strong>portfolio</strong> encontrarás algunos de los proyectos en los que he trabajado, desde <strong>aplicaciones web simples</strong> hasta complejos <strong>juegos en línea</strong>. Si buscas un <strong>desarrollador comprometido</strong>, ¡contáctame!
                    </p>
                </Col>
            </Row>


        </StyledDiv>

    </section>);
}

export default Home;