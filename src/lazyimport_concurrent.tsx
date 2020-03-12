import * as React from "react";
import * as ReactDOM from "react-dom";
// Sync Mode
// ReactDOM.render(<App />, document.getElementById("root"));

// Concurrent Mode
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

const BigComponent1 = React.lazy(() =>
  import(
    /* webpackChunkName: "BigComponent1" */
    /* webpackMode: "lazy" */
    "./BigComponent1"
  )
);
const BigComponent2 = React.lazy(() =>
  import(
    /* webpackChunkName: "BigComponent2" */
    /* webpackMode: "lazy" */
    "./BigComponent2"
  )
);
const BigComponent3 = React.lazy(() =>
  import(
    /* webpackChunkName: "BigComponent3" */
    /* webpackMode: "lazy" */
    "./BigComponent3"
  )
);

function App() {
  const [compNum, setCompNum] = React.useState(1);
  const articleIds = [1, 2, 3];
  return (
    <>
      {articleIds.map(articleId => (
        <React.Fragment key={articleId}>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              setCompNum(articleId);
            }}
          >
            Article{articleId}
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </React.Fragment>
      ))}
      {compNum === 1 && (
        <React.Suspense fallback={<div>"loading..."</div>}>
          <BigComponent1 />
        </React.Suspense>
      )}
      {compNum === 2 && (
        <React.Suspense fallback={<div>"loading..."</div>}>
          <BigComponent2 />
        </React.Suspense>
      )}
      {compNum === 3 && (
        <React.Suspense fallback={<div>"loading..."</div>}>
          <BigComponent3 />
        </React.Suspense>
      )}
    </>
  );
}
