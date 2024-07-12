import Home from "../pages/Home";

const Aside = ({ homeActive, toggle }) => {
  return (
    <div className={`aside-container ${toggle ? "aside-active" : null}`}>
      <Home homeActive={homeActive} />

      {/* <Routes>
        <Route path="/" element={<Home homeActive={homeActive} />} />
        <Route path="/proof" element={<Proof />} />
      </Routes> */}
    </div>
  );
};

export default Aside;
