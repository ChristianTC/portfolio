interface IContactCard {
  iconUrl: string,
  url: string,
  name: string,
  username: string,
}

const ContactCard: React.FC<IContactCard> = ({iconUrl, name, url, username}) => {
  return (
    // <Col sm={12} md={4}>
    <article className='contactcard'>
      <a href={url} target="_blank">
        <img src={iconUrl} />
        <p>{name}</p>
        <span>{username}</span>
      </a>
    </article>
    // </Col>
  )
}

export default ContactCard
