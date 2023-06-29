import "../css/write.css";
import { functions } from "../App";
import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate();

  // const texts = useContext(textValue);
  const { writeTextSave } = useContext(functions);
  const [individulText, setIndividulText] = useState({
    name: "",
    caption: "",
    content: "",
  });
  const nameRef = useRef();
  const captionRef = useRef();
  const contentRef = useRef();

  function inspect() {
    if (nameRef.current.value === "") {
      nameRef.current.focus();
    } else if (captionRef.current.value === "") {
      captionRef.current.focus();
    } else if (contentRef.current.value === "") {
      contentRef.current.focus();
    } else {
      writeTextSave(individulText);
      navigate(-1);
    }
  }

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
          ref={nameRef}
        ></input>
        <input
          className="writeTextCaption"
          placeholder="제목을 입력해 주세요."
          value={individulText.caption}
          onChange={(e) => {
            setIndividulText({ ...individulText, caption: e.target.value });
          }}
          ref={captionRef}
        ></input>
        <textarea
          className="writeTextContent"
          placeholder="내용을 입력해 주세요."
          value={individulText.content}
          onChange={(e) => {
            setIndividulText({ ...individulText, content: e.target.value });
          }}
          ref={contentRef}
        ></textarea>
        <div className="writeTextButtonWrapper">
          <button className="writeTextSave" onClick={inspect}>
            저장하기
          </button>
          <button
            className="writeTextDelete"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
