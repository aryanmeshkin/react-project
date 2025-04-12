import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import pic from "./../../assets/images/man-9481358_1920.jpg";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading/Loading";
function Article() {
  //   http://localhost:8000/articles/3
  const params = useParams();
  const [state, setState] = useState([]);
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((response) => {
        setState(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
      });
  }, []);


  return (
    <Fragment>
      <Navbar title="مقاله" />
      <div className={styled.articleWrapper}>
        {
          isLoading ? <Loading/> : 
        <div className="container">
          <h1>{state.title}</h1>
          <div className={styled.articleInfo}>
            <span>تاریخ : {state.date}</span>
            <span>نویسنده : {state.author}</span>
            <span>مدت زمان خواندن : {state.readingTime}</span>
          </div>
          <img src={pic} alt="" />
          <p>{state.content}</p>
        </div>
        }
      </div>
      <Footer />
    </Fragment>
  );
}
export default Article;
