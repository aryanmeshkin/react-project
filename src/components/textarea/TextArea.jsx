import styled from "./textArea.module.css"
function TextArea(props){
    return(
        <div className={styled.textareaWrapper}>
            <label htmlFor="">{props.label}</label>
            <textarea onChange={props.changeHandler}></textarea>
        </div>
    )
}
export default TextArea