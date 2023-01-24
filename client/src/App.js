import CanvasContainer from "./view/CanvasContainer";
import OptionsContainer from "./view/OptionsContainer";

// context imports 
import { SelectionContextProvider } from "./controller/contexts/SelectionContext";
import { CanvasContextProvider } from "./controller/contexts/CanvasContext";

// css imports
import "./view/styles/Container.css";
import "./view/styles/App.css";

const App = () => {
  return (
    <div id="main-container">
      <div className="container-flex-vertical" id="main-container">
        <SelectionContextProvider>
        <CanvasContextProvider>
          <OptionsContainer />
          <CanvasContainer />  
        </CanvasContextProvider> 
        </SelectionContextProvider>
      </div>
    </div>
  );
};


export default App;
