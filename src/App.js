import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import routes, { RenderRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>{RenderRoutes(routes)}</>
      </BrowserRouter>
    </div>
  );
}

export default App;
