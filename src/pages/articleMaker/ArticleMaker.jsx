import axios from "axios";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import TextArea from "../../components/textarea/TextArea";
import styled from "./articleMaker.module.css";
import { useState } from "react";
function ArticleMaker() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    time: "",
    message: "",
    imageURL:""
  });
  const handleChangeArticle = (event) => {
    setArticle((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

    // switch (event.target.name) {
    //   case "title":
    //     setArticle((prevState) => ({
    //       ...prevState,
    //       title: event.target.value,
    //     }));

    //     break;
    //   case "date":
    //     setArticle((prevState) => ({
    //       ...prevState,
    //       date: event.target.value,
    //     }));

    //     break;
    //   case "author":
    //     setArticle((prevState) => ({
    //       ...prevState,
    //       author : event.target.value,
    //     }));

    //     break;
    //   case "time":
    //     setArticle((prevState) => ({
    //       ...prevState,
    //       time : event.target.value,
    //     }));

    //     break;
    // }
  };
  const handleChangeArticleMessage = (event) => {
    setArticle((prevState) => ({
      ...prevState,
      message : event.target.value,
    }));
  };
  const handleCreateNewArticle = () => {
    console.log(article);
    axios.post("http://localhost:8000/articles",{
      id: 9,
      imageUrl: article.imageURL,
      title: article.title,
      readingTime: article.time,
      date: article.date,
      author: article.author,
      content: article.message
    })
  }
  
  return (
    <>
      <Navbar title="ساخت مقاله" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>ساخت مقاله جدید</h1>
          <Input
            label="عنوان"
            name="title"
            handleChange={handleChangeArticle}
          />
          <Input label="تاریخ" name="date" handleChange={handleChangeArticle} />
          <Input
            label="نویسنده"
            name="author"
            handleChange={handleChangeArticle}
          />
          <Input
            label="مدت زمان خواندن"
            name="time"
            handleChange={handleChangeArticle}
          />
          <Input
            label="آدرس عکس"
            name="imageURL"
            handleChange={handleChangeArticle}
          />
          <TextArea label="متن" changeHandler={handleChangeArticleMessage} />
          <div className = {styled.buttonWrapper}>
            <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
          </div>
          {/* <div className={styled.inputWrapper}>
            <label htmlFor="">عنوان</label>
            <input name="title" onChange={handleChangeArticle} type="text" />
          </div>
          <div className={styled.inputWrapper}>
            <label htmlFor="">تاریخ</label>
            <input name="date" onChange={handleChangeArticle} type="text" />
          </div>
          <div className={styled.inputWrapper}>
            <label htmlFor="">نویسنده</label>
            <input name="author" onChange={handleChangeArticle} type="text" />
          </div>
          <div className={styled.inputWrapper}>
            <label htmlFor="">مدت زمان خواندن</label>
            <input name="time" onChange={handleChangeArticle} type="text" />
          </div> */}
        </div>
      </div>
    </>
  );
}
export default ArticleMaker;
