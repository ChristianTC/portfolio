

import { projectAdminPro, projectAltruism, projectGoogleClone, projectJemcare, projectLendgistics, projectLetsConnect, projectPlatziConf, projectPortfolio, projectSellyourcar, projectSuperContrato, projectThesource, projectVitalCard } from "../assets/img/projects";
import ProjectCard from './ProjectCard';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: "Altruism",
      description: "Design & Development",
      imgUrl: projectAltruism,
      status: true,
      url: "https://admin.altruismhealthgroup.com/",
      technologies: [
        "React", "Typescript", "NodeJs", "Sass", "Figma"
      ]
    },
    {
      title: "Vital Card Admin",
      description: "Development",
      imgUrl: projectVitalCard,
      status: true,
      url: "https://www.vitalcard.com/",
      technologies: ["React", "Typescript", "NodeJs", "HTML", "Sass"]
    },
    {
      title: "Super Contrato",
      description: "Development",
      imgUrl: projectSuperContrato,
      status: true,
      url: "https://www.supercontrato.com/",
      technologies: ["Wordpress", "PHP", "JQuery", "Javascript", "Elementor"]
    },
    {
      title: "Let's Connect",
      description: "Design & Development",
      imgUrl: projectLetsConnect,
      status: true,
      url: "http://apps.letsconnect123.com/",
      technologies: ["React", "Typescript", "NodeJs", "HTML", "Sass", "Figma"]
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projectPortfolio,
      status: true,
      url: "https://christiantambo.netlify.app/",
      technologies: ["React", "Typescript", "NodeJs", "HTML", "CSS", "Vite", "Bootstrap"]
    },
    {
      title: "Admin Pro",
      description: "Development",
      imgUrl: projectAdminPro,
      status: true,
      url: "https://chrisdev-adminpro.netlify.app/",
      technologies: ["Angular", "NodeJs", "HTML", "CSS", "Typescript"]
    },
    {
      title: "Jemcare Admin",
      description: "Development",
      imgUrl: projectJemcare,
      status: true,
      url: "https://www.jemcare.org/",
      technologies: ["React", "Typescript", "NodeJs", "HTML", "Sass", "Figma"]
    },
    {
      title: "Lendgistics",
      description: "Development",
      imgUrl: projectLendgistics,
      status: false,
      url: "#",
      technologies: ["React", "Typescript", "NodeJs", "HTML", "Sass"]
    },
    {
      title: "Sell Your Car",
      description: "Design & Development",
      imgUrl: projectSellyourcar,
      status: false,
      url: "#",
      technologies: ["React", "Typescript", "NodeJs", "HTML", "Sass", "Figma"]
    },
    {
      title: "The Source Admin",
      description: "Design & Development",
      imgUrl: projectThesource,
      status: false,
      url: "#",
      technologies: ["React", "Typescript", "NodeJs", "HTML", "Sass", "Figma"]
    },
    {
      title: "Google Clone",
      description: "Development",
      imgUrl: projectGoogleClone,
      status: true,
      url: "https://google-clone-tc.netlify.app/",
      technologies: ["HTML", "CSS"]
    },
    {
      title: "Platzi Conf",
      description: "Development",
      imgUrl: projectPlatziConf,
      status: true,
      url: "https://badgesct.netlify.app/",
      technologies: ["Javascript", "HTML", "CSS"]
    },
  ]
return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col>
          <h2>Projects</h2>
          <p>These are the projects I have worked on:</p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">React</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Angular</Nav.Link>
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
                <Row>
                  {
                    projects.map((project, index) => {
                      if (project.technologies.includes('React')) {
                        return (
                          <ProjectCard 
                          key={index} 
                          {...project}
                          />
                          )
                        }
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row>
                  {
                    projects.map((project, index) => {
                      if (project.technologies.includes('Angular')) {
                        return (
                          <ProjectCard 
                          key={index} 
                          {...project}
                          />
                          )
                        }
                    })
                  }
                </Row>
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
