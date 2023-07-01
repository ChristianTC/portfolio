import { Container, Row, Col } from 'react-bootstrap';

import "react-multi-carousel/lib/styles.css";
import { logoAngular, logoCplusplus, logoCsharp, logoCss, logoFigma, logoFlutter, logoHtml, logoJava, logoJavascript, logoLaravel, logoMysql, logoNet, logoNodejs, logoPhp, logoPython, logoReact, logoSqlserver, logoTypescript, logoVite } from '../assets/img/technologies';
import SkillCard from './SkillCard';

const Skills = () => {
  const technologies = [
    {
      name: "React",
      logoUrl: logoReact
    },
    {
      name: "Angular",
      logoUrl: logoAngular
    },
    {
      name: "Javascript",
      logoUrl: logoJavascript
    },
    {
      name: "Typescript",
      logoUrl: logoTypescript
    },
    {
      name: "HTML",
      logoUrl: logoHtml
    },
    {
      name: "CSS",
      logoUrl: logoCss
    },
    {
      name: "NodeJs",
      logoUrl: logoNodejs
    },
    {
      name: "Flutter",
      logoUrl: logoFlutter
    },
    {
      name: "Java",
      logoUrl: logoJava
    },
    {
      name: "Python",
      logoUrl: logoPython
    },
    {
      name: "C++",
      logoUrl: logoCplusplus
    },
    {
      name: ".NET",
      logoUrl: logoNet
    },
    {
      name: "C#",
      logoUrl: logoCsharp
    },
    {
      name: "Laravel",
      logoUrl: logoLaravel
    },
    {
      name: "PHP",
      logoUrl: logoPhp
    },
    {
      name: "Vite",
      logoUrl: logoVite
    },
    {
      name: "Sql Server",
      logoUrl: logoSqlserver
    },
    {
      name: "MySql",
      logoUrl: logoMysql
    },
    {
      name: "Figma",
      logoUrl: logoFigma
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container >
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>These are the technologies I used in my projects:</p>
              <div className='technologies'>
                {
                  technologies.map((technology, index)=>{
                    return (
                      <SkillCard key={index} {...technology} />
                    )
                  })
                }
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
