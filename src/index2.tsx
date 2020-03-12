import * as React from "react";
import * as ReactDOM from "react-dom";
import { Suspense, SuspenseList } from "react";
import { unstable_createResource } from "react-cache";

// Concurrent Mode
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

function fetchAPI(path) {
  return new Promise<any>(resovle => {
    console.log("get resource from path");
    setTimeout(() => {
      fetch(path)
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

const APIResource = unstable_createResource<string, any>(path =>
  fetchAPI(path)
);

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
      <SuspenseList revealOrder={undefined}>
        <Suspense fallback={<div> loading articles...</div>}>
          <Article resource={APIResource} articlePath="article1.json"></Article>
        </Suspense>
        <Suspense fallback={<div> loading articles...</div>}>
          <Article resource={APIResource} articlePath="article2.json"></Article>
        </Suspense>
        <Suspense fallback={<div> loading articles...</div>}>
          <Article resource={APIResource} articlePath="article3.json"></Article>
        </Suspense>
      </SuspenseList>
    </>
  );
}

function Article({ resource, articlePath }) {
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
