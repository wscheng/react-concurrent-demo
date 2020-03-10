import * as React from "react";
import * as ReactDOM from "react-dom";
// Sync Mode
// ReactDOM.render(<App />, document.getElementById("root"));

// Concurrent Mode
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

const BigComponent = React.lazy(() =>
  import(
    /* webpackChunkName: "BigComponent" */
    /* webpackMode: "lazy" */
    "./BigComponent"
  )
);

function App() {
  const [showBigComponent, setShowBigComponent] = React.useState<boolean>(
    false
  );
  return (
    <>
      <button onClick={() => setShowBigComponent(true)}>
        Click me to load BigCompoent!
      </button>

      {showBigComponent && (
        <React.Suspense fallback={<div> loading...</div>}>
          <BigComponent />
        </React.Suspense>
      )}
    </>
  );
}
