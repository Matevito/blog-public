import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./routes/Home";
import Article from "./routes/Article";
import AuthorInfo from "./routes/AuthorInfo";
import About from "./routes/About";

// title of the article
const title = "Entremeses apolineos"

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Header title={title}/>
        <Routes>
          <Route exact path= "/" element={<Home />} />
          <Route path="/article/:id" element={<Article />}/>
          <Route path="/author/:id" element={<AuthorInfo />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Container>
      <Footer title={title}/>
    </BrowserRouter>
  );
}

export default App;
