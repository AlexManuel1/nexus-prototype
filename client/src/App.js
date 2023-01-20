import CanvasContainer from "./components/CanvasContainer";
import ShapeContainer from "./components/ShapeContainer";

// css imports
import "./styles/Container.css";
import "./styles/App.css";


const App = () => {
  return (
    <div>
      <div className="container-flex-horizontal" id="main-container">
        <ShapeContainer />
        <CanvasContainer />
      </div>
    </div>
  )
}


export default App;
