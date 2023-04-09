import styled from "styled-components";
import { REDES } from "../utils/redes";

const StyledDiv = styled.div`

    --dark-filters: brightness(130%) drop-shadow(7px 7px 5px rgba(0, 0, 0, 0.6));
 
    font-size: 21px;

    a {
        color: inherit;
        filter: ${({theme}) => theme.isDark ? 'var(--dark-filters)' : ''};;
    }
    a:hover {
        color: var(--bs-primary);
    }
`;

function Redes() {

    return (<StyledDiv className="d-flex justify-content-evenly p-3">
        {
            REDES.map((value, i) => {

                const {name, url, bi} = value;

                return (<a href={url} target="_blank" title={name[0].toUpperCase() + name.slice(1)} key={`link-${i}`}>

                    <i className={`bi bi-${bi || name}`}></i>

                </a>);
            })
        }
    </StyledDiv>);
}

export default Redes;