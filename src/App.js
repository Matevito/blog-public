import { BrowserRouter , Routes, Route } from "react-router-dom";

//todo routes
import Home from "./routes/Home"

//todo api fromcomponents

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path= "/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
