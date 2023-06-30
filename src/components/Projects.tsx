

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectCard from './ProjectCard';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ]
return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col>
          <h2>Projects</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas perspiciatis quidem eveniet reprehenderit hic ut delectus eius voluptatum, qui veritatis ipsa blanditiis natus? Recusandae illo laborum aut quae temporibus?</p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
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
              <Tab.Pane eventKey="second">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam voluptate, similique autem fugit repudiandae culpa libero illo. Enim velit, aperiam aliquid maxime aspernatur fuga repellendus. Eos perferendis ex dolores.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>Lorem</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  </section>
)
}

export default Projects
