import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./routes/Home";
import Article from "./routes/Article";
import AuthorInfo from "./routes/AuthorInfo";

// title of the article
const title = "Cuarto de los mil espejos"
function App() {
  return (
    <BrowserRouter >
      <Container maxWidth="lg">
        <Header title={title}/>
        <Routes>
          <Route exact path= "/" element={<Home />} />
          <Route path="/article/:id" element={<Article />}/>
          <Route path="/author/:id" element={<AuthorInfo />}/>
        </Routes>
      </Container>
      <Footer title={title}/>
    </BrowserRouter>
  );
}

export default App;
