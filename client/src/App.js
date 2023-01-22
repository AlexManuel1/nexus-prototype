import CanvasContainer from "./view/CanvasContainer";
import ShapeContainer from "./view/ShapeContainer";

// css imports
import "./styles/Container.css";
import "./styles/App.css";


const App = () => {
  return (
    <div id="main-container">
      <div className="container-flex-horizontal" id="main-container">
        <ShapeContainer />
        <CanvasContainer />
      </div>
    </div>
  )
}


export default App;
