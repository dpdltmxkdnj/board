import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { textValue } from "../App";

export default function Main() {
  const navigate = useNavigate();
  const texts = useContext(textValue);

  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const dateStr = `${year}-${month}-${day}`;
  console.log(dateStr);
  console.log(texts);
  return (
    <div className="main">
      <div className="topMain">
        <button
          className="write"
          onClick={() => {
            navigate(`write`);
          }}
        >
          글쓰기
        </button>
      </div>
      <div className="middleMain">
        <table className="middleMainList">
          <colgroup>
            <col style={{ width: "7%" }} />
            <col />
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <thead className="middleMainHeader">
            <tr>
              <th scope="col" data-table={"number"}>
                No.
              </th>
              <th scope="col" data-table={"subject"}>
                제목
              </th>
              <th scope="col" data-table={"writer"}>
                작성자
              </th>
              <th scope="col" data-table={"date"}>
                작성일
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>1</td>
              <td>
                <button>ddddddddddddddddd</button>
              </td>
              <td>DD</td>
              <td>2023-06-17</td>
            </tr> */}
            {texts.map((text) => (
              <tr key={text.number}>
                <td>{text.number}</td>
                <td>
                  <button>{text.caption}</button>
                </td>
                <td>{text.name}</td>
                <td>{text.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
