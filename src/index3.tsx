import * as React from "react";
import * as ReactDOM from "react-dom";
import { Suspense } from "react";
import { unstable_createResource } from "react-cache";
import MyList from "./MyList";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);
function App() {
  const [text, setText] = React.useState("");

  function handleChange(e) {
    // startTransition(() => {
    setText(e.target.value);
    // });
  }

  return (
    <div className="App">
      <h1>React No Concurrent Mode</h1>
      <label>
        Type into the input: <input value={text} onChange={handleChange} />
      </label>
      <p>
        Even though each list item in this demo completely blocks the main
        thread for 3 milliseconds, the app is able to stay responsive in
        Concurrent Mode.
      </p>
      <hr />
      {/* Pass the "lagging" value to the list */}
      <MyList filterText={text} />
    </div>
  );
}
