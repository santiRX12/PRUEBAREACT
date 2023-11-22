import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { useEffect, useState } from 'react';
import JSON from '../data/sample.json'
import '../styles/movies.css'

export const Movies = () => {

  const [datos, setDatos] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulación de carga
        setTimeout(() => {

          setDatos(JSON);
          setLoading(false);

        },0);

        // throw new Error('Simulated error');

      } catch (error) {
        console.error('Error al obtener datos:', error);
        setError('Oops, something went wrong...');
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const filteredAndSortedData = () => {
    return datos?.entries
      .filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie")
      .sort((a, b) => a.title.localeCompare(b.title));
  };

  const showPopup = entry => {
    setPopupInfo(entry);
  };

  const closePopup = () => {
    setPopupInfo(null);
  };
  

  return (
    <>
      <NavBar></NavBar>
      {loading? (
        <div className="message">
          <p>Loading...</p>
        </div>
      ): error ? (
        <div className="message">
          <p>{error}</p>
        </div>
      ):(
      <div className="result-box">
        {filteredAndSortedData()?.slice(0, 20).map((entry, index) => (
          <div key={index}  className="caja">
              <div className='image'>
                <div className="imagee"></div>
                <img src={entry.images["Poster Art"]?.url} alt={`Poster for ${entry.title}`} />
              </div>
              <div className="title">
                <h3
                  onMouseOver={() => {console.log("mouse"); setPopupInfo(null)}}
                  onClick={() => { 
                    console.log("click"); showPopup(entry)}}>{entry.title}
                </h3>
              </div>
          </div>
        ))}
        {popupInfo && (
          <div className={`popup ${popupInfo ? 'visible' : ''}`} onClick={closePopup}>
            <div className="modal">
                <img src={popupInfo.images["Poster Art"]?.url} alt={`Poster for ${popupInfo.title}`} />
              <h3>{popupInfo.title}</h3>
              <p className='description'>{popupInfo.description}</p>
              <p className='year'>Release Year: {popupInfo.releaseYear}</p>
              <div className="cerrar">
                <button onClick={closePopup}>X</button>
              </div>
            </div>
          </div>
        )}
      </div> 
      )}
      <Footer/>
    </>
  )
}
