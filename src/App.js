import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

//todo routes
import Header from "./Header";
import Footer from "./Footer";
import Home from "./routes/Home";

//todo api fromcomponents

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route exact path= "/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
