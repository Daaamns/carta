import { useState } from "react";
import "./App.scss";
import Animation from "./components/Animation";
import Carte3D from "./components/Carte3D";
function App() {
  const [isFlip, serIsFlip] = useState(false);

  const handleClickFlip = () => {
    serIsFlip(!isFlip);
  };
  return (
    <>
      <div className="card">
        <div className="anime">
          <Animation />
        </div>
        <div>
          <p className="text">
            daaaamn Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam est maxime commodi provident laudantium fugit excepturi
            incidunt alias, illo, sapiente sint vero, deserunt eum esse mollitia
            sit voluptatibus explicabo totam!
          </p>
        </div>
        <button className="button" onClick={handleClickFlip}>
          oh oh{" "}
        </button>
      </div>
      <Carte3D isFlip={isFlip} />
    </>
  );
}

export default App;
