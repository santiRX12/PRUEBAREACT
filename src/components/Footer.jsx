import '../styles/Footer.css'
import facebook from '../assets/social/facebook-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import instagram from '../assets/social/instagram-white.svg'
import apple from '../assets/store/app-store.svg'
import play from '../assets/store/play-store.svg'
import windows from '../assets/store/windows-store.svg'

export const Footer = () => {
  return (
    <>
    <div className="footer py-10 mt-10">
      <div className="arriba-2">
        <div className="espacio">
          Home
        </div>
        <p>|</p>
        <div className="espacio">
          Terms And Conditions
        </div>
        <p>|</p>
        <div className="espacio">
          Privacy Policy
        </div>
        <p>|</p>
        <div className="espacio">
          Collection Statement
        </div>
        <p>|</p>
        <div className="espacio">
          Help
        </div>
        <p>|</p>
        <div className="espacio">
          Manage Account
        </div>
      </div>
      <div className="medio py-5">
        Copyright © 2018 DEMO Streaming. All Rigths Reserved
      </div>

      <div className="abajo-2">
        <div className="izquierda">
          <div className="facebook">
            <img src={facebook} alt="" />
          </div>
          <div className="twitter">
            <img src={twitter} alt="" />
          </div>
          <div className="instagram">
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className="derecha">
          <div className="masDerecha">
            <div className="apple">
                <img src={apple} alt="" />
            </div>
            <div className="play">
              <img src={play} alt="" />
            </div>
            <div className="windows">
              <img src={windows} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
