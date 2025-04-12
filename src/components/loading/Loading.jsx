import styled from "./Loading.module.css";
function Loading() {
  return (
    <div className={styled.loading_page}>
      <div className ={styled.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loading;
