import { useContext } from "react";
import { textValue } from "./App";
import { useParams, Link } from "react-router-dom";
import "./css/Text.css";
export default function Text() {
  let { text } = useParams();
  text = parseInt(text);

  const totalText = useContext(textValue);

  let filterText = totalText.filter((v) => {
    return v.number === text;
  })[0];
  return (
    <div className="eachText">
      <div className="eachTextWrapper">
        <input
          className="eachTextName"
          value={`작성자 : ${filterText.name}`}
          disabled={true}
        ></input>
        <input
          className="eachTextCaption"
          value={`제목 : ${filterText.caption}`}
          disabled={true}
        ></input>
        <div className="eachTextDate">{filterText.date}</div>

        <div className="eachTextContent">{filterText.content}</div>
        <div className="eachTextButtonWrapper">
          <Link className="eachTextSave" to={`../modifys/${text}`}>
            수정하기
          </Link>
          <Link className="eachTextDelete" to="../">
            뒤로가기
          </Link>
        </div>
      </div>
    </div>
  );
}
