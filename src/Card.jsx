function Card({ title, category, description, link, difficulty }) {
  return (
    <div className="card">
      <span className="category">{category}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="difficulty">{difficulty}</span>
      <a href={link} target="_blank" rel="noreferrer">
        Visit Resource →
      </a>
    </div>
  )
}

export default Card