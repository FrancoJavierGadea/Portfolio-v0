import styled, { useTheme } from "styled-components";

import gargantua from "../assets/Gargantua.mp4";

const StyledDiv = styled.div`

    video {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100svh;
        object-fit: cover;
        object-position: 5% 10%;
    }

    main {
        position: relative;
        z-index: 50;
    }
`;


function Background({children}) {

    const theme = useTheme();


    return (<StyledDiv>

        {theme.isDark && <video src={gargantua} autoPlay muted loop />}
        
        <main>{children}</main>

    </StyledDiv>);
}

export default Background;