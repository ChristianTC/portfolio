import { Container, Row, Col } from 'react-bootstrap';
import person from '../assets/img/person.png'
const About = () => {
  return (
    <section className="about" id="about">
      <Container >
        <Row>
          <Col>
            <div className="about-bx">
              <h2>About me</h2>
              <Row className='d-flex align-items-center'>
                <Col md='4'>
                  <img src={person} alt="" />
                </Col>
                <Col md='8'>
                  <p>Hi, my name is Christian Tambo, I’m developer based in Bolivia who is mainly interested in web technologies.</p>
                  <p>I enjoy to learn about new technologies and share my knowledge to help others when possible.</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
