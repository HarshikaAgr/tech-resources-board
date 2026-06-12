function Card({ title, category, description, link, difficulty, isFavorited, onFavorite }) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="category">{category}</span>
        <button className="fav-btn" onClick={onFavorite}>
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
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