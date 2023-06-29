import "./css/modify.css";
import { functions, textValue } from "./App";
import { useContext, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function Modify() {
  const nameRef = useRef();
  const captionRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();
  let { modify } = useParams();

  modify = parseInt(modify);
  const totalText = useContext(textValue);

  let filterText = totalText.filter((v) => {
    return v.number === modify;
  })[0];
  const { modifyText, removeText } = useContext(functions);
  const [individulText, setIndividulText] = useState(filterText);

  function remove() {
    let answer = window.confirm("정말 삭제하시겠습니까?");
    if (answer) {
      removeText(individulText);
      navigate(-2);
    } else {
      return;
    }
  }

  return (
    <div className="modifyText">
      <div className="modifyTextWrapper">
        <input
          className="modifyTextName"
          placeholder="이름을 입력해 주세요."
          onChange={(e) => {
            setIndividulText({ ...individulText, name: e.target.value });
          }}
          ref={nameRef}
          value={individulText.name}
        ></input>
        <input
          className="modifyTextCaption"
          placeholder="제목을 입력해 주세요."
          onChange={(e) => {
            setIndividulText({ ...individulText, caption: e.target.value });
          }}
          ref={captionRef}
          value={individulText.caption}
        ></input>
        <textarea
          className="modifyTextContent"
          placeholder="내용을 입력해 주세요."
          onChange={(e) => {
            setIndividulText({ ...individulText, content: e.target.value });
          }}
          ref={contentRef}
          value={individulText.content}
        ></textarea>
        <div className="modifyTextButtonWrapper">
          <button
            className="modifyTextSave"
            onClick={() => {
              modifyText(individulText);
              navigate(-2);
            }}
          >
            저장하기
          </button>
          <Link to="../">취소하기</Link>
          <button className="modifyTextDelete" onClick={remove}>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}
