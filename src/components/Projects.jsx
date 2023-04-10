import { useEffect, useState } from "react";
import { GH_API, USERNAME } from "../utils/github-api";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import useBreakPoints from "../hooks/useBreakpoints";


const StyledDiv = styled.div`

    --dark-filters: brightness(130%) drop-shadow(7px 7px 5px rgba(0, 0, 0, 0.6));

    h2 {
        filter: ${({theme}) => theme.isDark ? 'var(--dark-filters)' : ''};
    }
`;

function Projects() {

    const [repositories, setRepositories] = useState(null);

    const [isLG] = useBreakPoints('lg');

    useEffect(() => {
        
        fetch(GH_API.starred)
        .then(response => {

            return response.json();
        })
        .then(value => {

            const repos = value
            .filter(rep => rep.owner.login === USERNAME)
            .map(rep => {

                const {name, description, html_url, topics, homepage} = rep;

                

                return {
                    name: name.replaceAll('-', ' '),
                    description,
                    link: html_url,
                    topics,
                    deploy: homepage,
                    preview: GH_API.raw(name, 'preview.webp')
                }
            });

            setRepositories(repos);
        });

    }, []);

    return (<section className="container" id="Proyectos" style={{scrollMarginTop: isLG ? 100 : 200}}>

        <StyledDiv>
            <h2 className="py-2 mb-4 border-bottom border-2 border-primary">Proyectos</h2>
            
            <div className="d-flex justify-content-center justify-content-md-between flex-wrap">
                {
                    repositories?.map((rep, i) => {

                        const {name, deploy, link, description, preview, topics} = rep;

                        return <ProjectCard title={name} deploy={deploy} link={link} description={description} image={preview} topics={topics} key={`project-${i}`}/>
                    })
                }
            </div>
        </StyledDiv>

    </section>);
}

export default Projects;