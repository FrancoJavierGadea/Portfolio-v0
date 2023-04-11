import styled, { useTheme } from "styled-components";
import { useEffect, useRef } from "react";

import gargantua from "../assets/Gargantua.webm";
import gargantua_poster from "../assets/Gargantua-poster.jpg";
import triangles from "../assets/white-triangles.webm";
import triangles_poster from "../assets/white-triangles.jpg";

const StyledDiv = styled.div`

    .poster {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: 5% 10%;
    }

    video {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
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

    const videoRef = useRef();

    useEffect(() => {
        

        if(videoRef.current){

            videoRef.current.playbackRate = 1.5;
        }

    }, []);


    return (<StyledDiv className="Background">

        {theme.isDark && <img className="poster" src={theme.isDark ? gargantua_poster : triangles_poster} alt="Image de fondo" />}

        <video className="video" 

            src={theme.isDark ? gargantua : triangles} poster={theme.isDark ? gargantua_poster : triangles_poster}

            autoPlay muted loop ref={videoRef}
        />
        
        <div className="content">{children}</div>

    </StyledDiv>);
}

export default Background;