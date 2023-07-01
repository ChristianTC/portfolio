import { Col } from 'react-bootstrap';

interface IProjectCard {
  title: string,
  description: string,
  imgUrl: string,
  status: boolean,
  url: string,
  technologies: string[],
}

const ProjectCard: React.FC<IProjectCard> = ({ title, description, status, imgUrl, url, technologies }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        {
          status &&
            <div className="proj-txtx">
              <a href={url} target='_blank'>&nbsp;&nbsp;View&nbsp;&nbsp;</a>
            </div> 
        }
      </div>
      <div className='proj-desc'>
        <h4>{title}</h4>
        <p style={{fontSize: '12px', marginLeft: '5%', textAlign:'center'}}>{description}</p>
        <p>Technologies:
          {technologies.map((technology, index)=>{
            if(index === technologies.length-1) {
              return (` ${technology}.`)
            }
            return (` ${technology},`);
          })}
        </p>
      </div>
    </Col>
  )
}

export default ProjectCard
