import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import placeholder from '../assets/placeholder.png'
import '../styles/Home.css'

export const Home = () => {
  return (
    <>
    <NavBar/>
      <div className="home">
        <div className="series">
          <Link to="/series">
          <div className="container">
            <div className="imagen">
              <img src={placeholder} alt="" />
            </div>
            <div className="texto">
              <h1>SERIES</h1>
            </div>
          </div>
          </Link>
          <h1>Popular series</h1>
        </div>
        <div  className="movies">
          <Link to="/peliculas">
          <div className="container">
            <div className="imagen">
              <img src={placeholder} alt="" />
            </div>
            <div className="texto">
              <h1>MOVIES</h1>
            </div>
          </div>
          </Link>
          <h1>Popular movies</h1>
        </div>
      </div>
    <Footer/>
    </>
  )
}
