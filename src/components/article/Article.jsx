import styled from "./article.module.css";
import article from "./../../assets/images/bird-9476034_1920.png"
function Article(props) {
  console.log(props.article.readingTime);
  return (
      <div className={styled.articleWrapper}>
        <img src= {props.article.imageUrl} />
        <h3>{props.article.title}</h3>
        <p>{props.article.readingTime}</p>
      </div>
    
  );
}
export default Article;
