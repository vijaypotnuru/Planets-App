import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props

  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-item">
      <div className="planet-img-container">
        <img className="planet-img" src={imageUrl} alt={`planet ${name}`} />
      </div>

      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
