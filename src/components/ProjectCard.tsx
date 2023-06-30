import { Col } from 'react-bootstrap';

interface IProjectCard {
  title: string,
  description: string,
  imgUrl: string
}

const ProjectCard: React.FC<IProjectCard> = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard
