import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Front-End",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Back-End",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Full-Stack",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Mobile",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "DeskTop",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Basic programing",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    // <section className="project" id="projects">
    //   <Container>
    //     <Row>
    //       <Col size={12}>
    //         <TrackVisibility>
    //           {({ isVisible }) =>
    //           <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
    //             <h2>Projects</h2>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    //             <Tab.Container id="projects-tabs" defaultActiveKey="first">
    //               <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
    //                 <Nav.Item>
    //                   <Nav.Link eventKey="first">Programing</Nav.Link>
    //                 </Nav.Item>
    //                 <Nav.Item>
    //                   <Nav.Link eventKey="second">Net Work</Nav.Link>
    //                 </Nav.Item>
    //                 <Nav.Item>
    //                   <Nav.Link eventKey="third">SYC</Nav.Link>
    //                 </Nav.Item>
    //                 <Nav.Item>
    //                   <Nav.Link eventKey="forth">Ui/Ux</Nav.Link>
    //                 </Nav.Item>
                    
    //               </Nav>
    //               <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
    //                 <Tab.Pane eventKey="first">
    //                   <Row>
    //                     {
    //                       projects.map((project, index) => {
    //                         return (
    //                           <ProjectCard
    //                             key={index}
    //                             {...project}
    //                             />
    //                         )
    //                       })
    //                     }
    //                   </Row>
    //                 </Tab.Pane>
    //                 <Tab.Pane eventKey="second">
    //                 <Row>
    //                     {
    //                       projects.map((project, index) => {
    //                         return (
    //                           <ProjectCard
    //                             key={index}
    //                             {...project}
    //                             />
    //                         )
    //                       })
    //                     }
    //                   </Row>
    //                 </Tab.Pane>
    //                 <Tab.Pane eventKey="third">
    //                 <Row>
    //                     {
    //                       projects.map((project, index) => {
    //                         return (
    //                           <ProjectCard
    //                             key={index}
    //                             {...project}
    //                             />
    //                         )
    //                       })
    //                     }
    //                   </Row>
    //                 </Tab.Pane>
    //                 <Tab.Pane eventKey="forth">
    //                 <Row>
    //                     {
    //                       projects.map((project, index) => {
    //                         return (
    //                           <ProjectCard
    //                             key={index}
    //                             {...project}
    //                             />
    //                         )
    //                       })
    //                     }
    //                   </Row>
    //                 </Tab.Pane>
    //               </Tab.Content>
    //             </Tab.Container>
    //           </div>}
    //         </TrackVisibility>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <img className="background-image-right" src={colorSharp2}></img>
    // </section>
    <section className="project" id="projects">
  <Container fluid>
    <Row className="justify-content-center">
      <Col md={10} lg={8}>
      <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Tracks</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Programing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Net Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">SYC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">Ui/Ux</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="second">
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
                    <Tab.Pane eventKey="third">
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
                    <Tab.Pane eventKey="forth">
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
      </Col>
    </Row>
  </Container>
  <img className="background-image-right" src={colorSharp2} alt="Background"></img>
</section>
  )
}
