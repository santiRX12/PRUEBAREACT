























import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/NavBar.css'



export const NavBar = () => {

    const [pageTitle, setPageTitle] = useState('Popular Titles');
    const location = useLocation();
  
    useEffect(() => {
      switch (location.pathname) {
        case '/series':
          setPageTitle('Popular Series');
          break;
        case '/peliculas':
          setPageTitle('Popular Movies');
          break;
        default:
          setPageTitle('Popular Titles');
      }
    }, [location.pathname]);

  return (
    <>
    <div className="navbar">
        <div className=' py-2 arriba'>
            <div className="streaming">
                <h1>DEMO Streaming</h1>
            </div>
            <div className="login px-10">
            <button className=" text-white font-bold py-2 px-4 rounded">
                 Log in
            </button>
            </div>
            <div className="start  ">
            <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 ">
                start your free trial
            </button>
            </div>
        </div>
        <div className=' py-2 abajo'>
            <div className="titles">
                <h1>{pageTitle}</h1>
            </div>
        </div>
    </div>
    </>
  )
}
