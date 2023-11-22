import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { useEffect, useState } from 'react';
import JSON from '../data/sample.json'
import '../styles/series.css'

export const Series = () => {
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

        },3000);

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
      .filter(entry => entry.releaseYear >= 2010 && entry.programType === "series")
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
      <NavBar/>
      {loading? (
        <div className="message2">
          <p>Loading...</p>
        </div>
      ): error ? (
        <div className="message2">
          <p>{error}</p>
        </div>
      ):(
      <div className="result-box-2">
        {filteredAndSortedData()?.slice(0, 20).map((entry, index) => (
          <div key={index}  className="caja2">
              <div className='image2'>
                <div className="imagee2"></div>
                <img src={entry.images["Poster Art"]?.url} alt={`Poster for ${entry.title}`} />
              </div>
              <div className="title2">
                <h3
                  onMouseOver={() => {console.log("mouse"); setPopupInfo(null)}}
                  onClick={() => { 
                    console.log("click"); showPopup(entry)}}>{entry.title}
                </h3>
              </div>
          </div>
        ))}
        {popupInfo && (
          <div className={`popup2 ${popupInfo ? 'visible' : ''}`} onClick={closePopup}>
            <div className="modal2">
                <img src={popupInfo.images["Poster Art"]?.url} alt={`Poster for ${popupInfo.title}`} />
              <h3>{popupInfo.title}</h3>
              <p className='description2'>{popupInfo.description}</p>
              <p className='year2'>Release Year: {popupInfo.releaseYear}</p>
              <div className="cerrar2">
                <button onClick={closePopup}>X</button>
              </div>
            </div>
          </div>
        )}
      </div> 
      )}      <Footer/>
    </>
  )
}
