import { useNavigate } from "react-router-dom";

export default function Main({ mainText }) {
  const navigate = useNavigate();

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
            {mainText.map((text) => (
              <tr key={text.number}>
                <td>{text.number}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`texts/${text.number}`);
                    }}
                  >
                    {text.caption}
                  </button>
                </td>
                <td>{text.name}</td>
                <td>{text.date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
