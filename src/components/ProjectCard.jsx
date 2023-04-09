import styled from "styled-components";
import { Badge, Card } from "react-bootstrap";


const StyledCard = styled.div`

    margin: 10px;

    .card {
        --bs-card-height: 100%;
        --bs-card-bg: ${({theme}) => theme.isDark ? 'var(--bs-tertiary-bg)' : 'var(--bs-light)'};
    }
    .card-link {
        color: inherit;
        font-size: 21px;
    }
    .card-link:hover {
        color: var(--bs-primary);
    }

    .badge {
        text-transform: capitalize;
        font-size: 13px;
    }
`;

function ProjectCard({title, description, link, deploy, topics = [], image}) {

    return (<StyledCard>

        <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src={image} />

            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>

                <div className="d-flex justify-content-end mt-auto">

                    <div className="d-flex align-items-center">
                        {
                            topics.map((value, i) => {

                                return <Badge className="mx-1" key={`topic-${i}`}>{value}</Badge>
                            })
                        }
                    </div>

                    <div className="ms-auto">
                        <Card.Link href={link} title="Repositorio"><i className="bi bi-github"></i></Card.Link>
                        <Card.Link href={deploy} title="Deploy"><i className="bi bi-arrow-up-right-square"></i></Card.Link>
                    </div>
                </div>
            </Card.Body>
        </Card>


    </StyledCard>);
}

export default ProjectCard;