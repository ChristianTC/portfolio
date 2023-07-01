import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg'
import iconGithub from '../assets/img/github.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='align-items-center'>
          <Col sm={6} className='text-left text-sm-left'>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/christiantambo/" target='_blank'><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/ChristianTC" target='_blank'><img src={iconGithub} alt="" /></a>
            </div>
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <span style={{ color: 'white', fontSize: '30px'}}>{'</'}</span>
            <span style={{fontFamily: 'Cascadia Code', color: 'orange', fontSize: '25px'}}>{'ChristianTambo'}</span>
            <span style={{ color: 'white', fontSize: '30px'}}>{'>'}</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
