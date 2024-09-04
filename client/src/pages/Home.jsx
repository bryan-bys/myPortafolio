const Home = ({ homeActive }) => {
  return (
    <div className={`home-container ${homeActive ? "home-active" : null}`}>
      <div className="home-content">
        <h3>WELCOME</h3>
        <p>
          Hola, soy Bryan, un apasionado del desarrollo web autodidacta con
          solidos conocimientos en React, typescript,Javascript y css. También
          tengo conocimientos en backend con Python y Django. En este
          portafolio, encontrarás una muestra de mis proyectos, donde podrás ver
          mi dedicación y amor por la creación de interfaces intuitivas y
          atractivas, así como mi habilidad para desarrollar soluciones en el
          backend. ¡Espero que disfrutes explorando mi trabajo tanto como yo
          disfruté creándolo!
        </p>
      </div>
    </div>
  );
};

export default Home;
