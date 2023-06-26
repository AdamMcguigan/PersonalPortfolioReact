import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCards"
import colorSharp2 from "../Assets/img/color-sharp2.png";
import projImg1 from "../Assets/img/project-img1.png";
import projImg2 from "../Assets/img/project-img2.png";
import projImg3 from "../Assets/img/project-img3.png";
import projImg4 from "../Assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () => {
    
    const projects = [
        {
            title: "RogueLike",
            description: "RogueLike game that I created for one of my modules. There was Design patterns also used during the development of the game",
            imgUrl: projImg1, 
        },
        {
            title: "Project 2 ",
            description: "Game where i lift heavy circles",
            imgUrl: projImg2, 
        },
        {
            title: "Project 3",
            description: "Game where i lift heavy circles again",
            imgUrl: projImg3, 
        },
        {
            title: "Project 4",
            description: "Game where i lift heavy circles again again",
            imgUrl: projImg4, 
        },
    ]
    
    return (
        <section classname="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Projects</h2>
                    <p>Here i can give a smol description of the projects that im listing</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                     <Tab.Pane eventKey="first">
                        <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard 
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                        </Row>
                     </Tab.Pane>
                     <Tab.Pane eventKey="section">Change this text out to what we want to display: Could add more projects to the other tabs or other components</Tab.Pane>
                     <Tab.Pane eventKey="third">Change this text out to what we want to display: Could add more projects to the other tabs or other components</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img classname="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

//Chapter 1 - page 02 heading 3 - 4