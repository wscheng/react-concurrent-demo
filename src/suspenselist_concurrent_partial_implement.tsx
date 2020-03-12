import * as React from "react";
import * as ReactDOM from "react-dom";
import { Suspense, SuspenseList } from "react";

// Concurrent Mode
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

function fetchAPI(path) {
  return new Promise<any>(resovle => {
    console.log("get resource from path");
    setTimeout(() => {
      fetch("./dummydata/" + path)
        .then(res => {
          return res.json();
        })
        .then(jsonObj => {
          console.log("fetch:", jsonObj);
          resovle(jsonObj);
        });
    }, 3000 * Math.random());
  });
}

let cache = {};

const getData = path => {
  if (cache[path]) return cache[path];
  else {
    let p = fetchAPI(path);
    p.then(rsp => (cache[path] = rsp));
    throw p;
  }
};

function App() {
  return (
    <>
      <SuspenseList revealOrder="together">
        <Suspense fallback={<div> loading articles...</div>}>
          <Article articlePath="article1.json"></Article>
        </Suspense>
        <Suspense fallback={<div> loading articles...</div>}>
          <Article articlePath="article2.json"></Article>
        </Suspense>
        <Suspense fallback={<div> loading articles...</div>}>
          <Article articlePath="article3.json"></Article>
        </Suspense>
      </SuspenseList>
    </>
  );
}

function Article({ articlePath }) {
  const article = getData(articlePath);
  return (
    <>
      <h2>{article.title}</h2>
      <hr />
      <h3>作者：{article.author}</h3>
      <h3>發表日期：{article.date}</h3>
      <pre>{article.content}</pre>
    </>
  );
}
