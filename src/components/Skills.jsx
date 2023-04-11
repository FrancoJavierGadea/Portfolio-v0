import styled, { useTheme } from "styled-components";
import { TECNOLOGIAS } from "../utils/tecnologias";
import useBreakPoints from "../hooks/useBreakpoints";



const StyledDiv = styled.div`

    --dark-filters: brightness(130%) drop-shadow(7px 7px 5px rgba(0, 0, 0, 0.6));

    h2 {
        filter: ${({theme}) => theme.isDark ? 'var(--dark-filters)' : ''};
    }

    .Skill {

        margin: 10px;
        filter: ${({theme}) => theme.isDark ? 'var(--dark-filters)' : ''};
    }

    .Skill img {
        width: 50px;
        height: 50px;
        object-fit: scale-down;
    }
`;


function Skills() {

    const theme = useTheme();

    const [isLG] = useBreakPoints('lg');

    return (<section className="container" id="Tecnologias" style={{scrollMarginTop: isLG ? 100 : 200}}>

        <StyledDiv>
            <h2 className="py-2 mb-4 border-bottom border-2 border-primary">Tecnologias</h2>
                
            <div className="d-flex justify-content-center justify-content-md-between flex-wrap">
                {
                    TECNOLOGIAS.map((value, i) => {

                        const {name, url, styles = {}} = value;

                        return (<div className="Skill d-flex flex-column align-items-center" key={`skill-${i}`}>

                            <img src={url} alt={`logo de ${name}`} style={theme.isDark ? styles.dark : styles.light}/>

                            <p className="mt-1">{name}</p>
                            
                        </div>);
                    })
                }
            </div>
        </StyledDiv>

    </section>);
}

export default Skills;