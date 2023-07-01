import { Container, Row, Col } from 'react-bootstrap';


import iconLinkedin from '../assets/img/nav-icon1.svg'
import iconGithub from '../assets/img/github.svg'
import iconTwitter from '../assets/img/twitter.svg'
import iconPlatzi from '../assets/img/platzi.svg'
import iconEmail from '../assets/img/email.svg'
import ContactCard from './ContactCard';

const Contact = () => {
  const contacts = [
    {
      iconUrl: iconLinkedin,
      url: "https://www.linkedin.com/in/christiantambo/",
      name: "LinkedIn",
      username: "@christiantambo"
    },
    {
      iconUrl: iconGithub,
      url: "https://github.com/ChristianTC",
      name: "GitHub",
      username: "@ChristianTC"
    },
    {
      iconUrl: iconTwitter,
      url: "https://twitter.com/ChristianTambo",
      name: "Twitter",
      username: "@ChristianTambo"
    },
    {
      iconUrl: iconPlatzi,
      url: "https://platzi.com/p/christiantambo/",
      name: "Platzi",
      username: "@christiantambo"
    },
  ];

  return (
    <section className="contact" id="contact">
      <Container >
        <Row>
          <Col>
            <div className="contact-bx">
              <h2>Contact</h2>
              <p>If you wanna get in touch or talk about a project, feel free to contact me via email at</p>
              <article className='email'>
                <img src={iconEmail} alt="" />
                <span>&nbsp;christiantambo15@gmail.com</span>
              </article>
              <p>You can also send me a Direct Message on Social Media.</p>
              <div className='technologies'>
                {
                  contacts.map((contact, index)=>{
                    return (
                      <ContactCard key={index} {...contact} />
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

export default Contact
