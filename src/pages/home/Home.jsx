
import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Loading from "./../../components/loading/Loading";
function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://react-project-8ecc5-default-rtdb.firebaseio.com/articles.json")
      .then((response) => {
        const data = response.data;
        const articlesArray = Object.entries(data || {}).map(([key,value])=>({
          ...value,
          id: key,
        }))
        setArticles(articlesArray);
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="وب" />

      <div className="container">
        <h2>مقالات جدید</h2>
        {isLoading ? (
          <Loading/>
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
export default Home;
