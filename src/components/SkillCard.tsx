
interface ITechnologyCard {
  name: string,
  logoUrl: string
}

const SkillCard: React.FC<ITechnologyCard> = ({name, logoUrl}) => {
  return (
    // <Col sm={12} md={4}>
    <article className='skillcard'>
      <img src={logoUrl} />
      <p>{name}</p>
    </article>
    // </Col>
  )
}

export default SkillCard
