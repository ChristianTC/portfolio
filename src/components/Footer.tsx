import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='align-items-center'>
          <Col sm={6} className='text-left text-sm-left'>
            <div className="social-icon">
              <a href=""><img src={navIcon1} alt="" /></a>
              <a href=""><img src={navIcon2} alt="" /></a>
              <a href=""><img src={navIcon3} alt="" /></a>
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
