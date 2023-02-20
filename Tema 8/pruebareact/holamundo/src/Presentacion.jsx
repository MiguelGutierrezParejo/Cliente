import imagen from './assets/mondongo.jpeg'

function Presentacion() {
  let name = "Mondongo"

  return (
    <div className="Presentacion">
      <h1>{name}</h1>
      <img src= {imagen} alt="imagen" className='mondongo' /> 
    </div>
  )
}

export default Presentacion
