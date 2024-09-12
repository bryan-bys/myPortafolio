import myx1 from "../assets/myx1.png";
import myx2 from "../assets/myx2.png";
import djangoLogo from "../assets/django-original.svg";

const XTwitter = ({ myxActivate, setMyxActivate }) => {
  return (
    <>
      <div
        className={`myx-container ${
          myxActivate ? "myx-container-activate" : "myx-container-out"
        }`}
      >
        <div className="arrow-container">
          <i
            onClick={() => {
              setMyxActivate(false);
            }}
            className="fa-solid fa-arrow-right close-arrow"
          ></i>
        </div>
        <div className="text-project-son">
          <h3> X (TWITTER) </h3>
          <p className="project-son-description ">
            App inspirada en X (twitter) e instagram. Los usuarios pueden
            registrarse hacer publicaciones escritas, dar "me gusta" y comentar.
            <ul>
              <li>
                Frontend prgramado en React (hooks, React router, componentes)
              </li>
              <li>
                Backend programado en Django(autenticacion de usuario, manejo de
                post, likes y comentarios )
              </li>
              <li>API REST</li>
              <li>Estilos y Animaciones en Css</li>
            </ul>
          </p>
          <div className="languages">
            <p>
              <i className="fa-brands fa-react"></i>
            </p>
            <p>
              <img className="django-logo" src={djangoLogo} />
            </p>
            <p>
              <i className="fa-brands fa-github"></i>
            </p>
          </div>

          <a href="https://myx-f3an.onrender.com" target="_blank">
            PUEDE VISITARLA AQUI
            <i className="fa-solid fa-square-arrow-up-right"></i>
          </a>
        </div>

        <div className="project-son-img-container">
          <img src={myx1} />
          <img src={myx2} />
        </div>
      </div>
    </>
  );
};

export default XTwitter;
