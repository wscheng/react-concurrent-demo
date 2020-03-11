import * as React from "react";
import * as ReactDOM from "react-dom";
// Sync Mode
import BigComponent1 from "./BigComponent1";
import BigComponent2 from "./BigComponent2";
import BigComponent3 from "./BigComponent3";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

function App() {
  const [compNum, setCompNum] = React.useState(1);
  const articleIds = [1, 2, 3];
  return (
    <>
      {articleIds.map(articleId => (
        <>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              setCompNum(articleId);
            }}
          >
            Article{articleId}
          </a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </>
      ))}
      {compNum === 1 && <BigComponent1 />}
      {compNum === 2 && <BigComponent2 />}
      {compNum === 3 && <BigComponent3 />}
    </>
  );
}
