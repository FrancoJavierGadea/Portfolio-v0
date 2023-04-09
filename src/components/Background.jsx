import styled, { useTheme } from "styled-components";

import gargantua from "../assets/Gargantua.webm";

const StyledDiv = styled.div`

    video {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: 5% 10%;
    }

    .content {
        position: relative;
        z-index: 50;
    }
`;


function Background({children}) {

    const theme = useTheme();


    return (<StyledDiv className="Background">

        {theme.isDark && <video src={gargantua} autoPlay muted loop />}
        
        <div className="content">{children}</div>

    </StyledDiv>);
}

export default Background;