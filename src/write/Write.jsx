import "../css/write.css";
import { textValue, functions } from "../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate();

  const texts = useContext(textValue);
  const writeTextSave = useContext(functions);
  console.log(texts);
  const [individulText, setIndividulText] = useState({
    name: "",
    caption: "",
    content: "",
  });

  return (
    <div className="writeText">
      <div className="writeTextWrapper">
        <input
          className="writeTextName"
          placeholder="이름을 입력해 주세요."
          value={individulText.name}
          onChange={(e) => {
            setIndividulText({ ...individulText, name: e.target.value });
          }}
        ></input>
        <input
          className="writeTextCaption"
          placeholder="제목을 입력해 주세요."
          value={individulText.caption}
          onChange={(e) => {
            setIndividulText({ ...individulText, caption: e.target.value });
          }}
        ></input>
        <textarea
          className="writeTextContent"
          placeholder="내용을 입력해 주세요."
          value={individulText.content}
          onChange={(e) => {
            setIndividulText({ ...individulText, content: e.target.value });
          }}
        ></textarea>
        <div className="writeTextButtonWrapper">
          <button
            className="writeTextSave"
            onClick={() => {
              writeTextSave(individulText);
              navigate(-1);
            }}
          >
            저장하기
          </button>
          <button
            className="writeTextDelete"
            onClick={() => {
              navigate(-1);
            }}
          >
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
}
