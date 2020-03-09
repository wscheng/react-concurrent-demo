import * as React from "react";
import * as ReactDOM from "react-dom";
//import { BigComponent } from "./BigComponent";
// import {} from "react/experimental";
// import {} from "react-dom/experimental";

// single
// ReactDOM.render(<App />, document.getElementById("root"));
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

const deferImport = (promise: any) =>
  new Promise<{ default: any }>(resolve =>
    setTimeout(() => resolve(promise), 2000)
  );

// const BigComponent = React.lazy(() => import("./BigComponent"));

const BigComponent = React.lazy(() => deferImport(import("./BigComponent")));

enum Tab {
  NUM1,
  NUM2,
  NUM3
}

function App() {
  const [tabNum, setTabNum] = React.useState<number>(0);
  return (
    <>
      <h1>This is a big component demo, current tab is {tabNum}</h1>
      <button onClick={() => setTabNum(Tab.NUM1)}>
        Click me to load BigCompoent1!
      </button>
      <button onClick={() => setTabNum(Tab.NUM2)}>
        Click me to load BigCompoent2!
      </button>
      <button onClick={() => setTabNum(Tab.NUM3)}>
        Click me to load BigCompoent3!
      </button>
      {tabNum == Tab.NUM2 && (
        <React.Suspense fallback={<div> loading...</div>}>
          <BigComponent />
        </React.Suspense>
      )}
    </>
  );
}

function ContentContainer() {
  return <div></div>;
}
