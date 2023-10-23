import "./Carte3D.scss"

function Carte3D({isFlip }) {
  return (
    <>
      <div className= {"container"}>
        <div className={ `carte ${isFlip ? "card-is-flipped" : ""}`}>
          <div className="carte_front carta">ahah</div>
          <div className="carte_back  carta">t naz</div>
        </div>
      </div>
    </>
  );
}

export default Carte3D