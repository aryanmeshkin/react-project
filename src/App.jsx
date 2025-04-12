import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs"
import ArticlePage from "./pages/articlePage/ArticlePage"
import {Route , Routes} from "react-router-dom"
import ArticleMaker from "./pages/articleMaker/ArticleMaker";
import NotFound from "./pages/notFound/NotFound";
function App() {
  return (
    <div>
      <Routes>
        <Route path = "*" element={<NotFound/>}/>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<AboutUs />} />
        <Route path="/article/:id" element = {<ArticlePage />} />
        <Route path="/articleMaker" element= {<ArticleMaker />}></Route>
      </Routes>
    </div>
  );
}

export default App;
