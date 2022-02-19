import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

//todo routes
import Header from "./Header";
import Footer from "./Footer";
import Home from "./routes/Home";

//todo api fromcomponents

const title = "Disgreciones de un tirano"

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Header title={title}/>
        <Routes>
          <Route exact path= "/" element={<Home />} />
        </Routes>
      </Container>
      <Footer title={title}/>
    </BrowserRouter>
  );
}

export default App;
