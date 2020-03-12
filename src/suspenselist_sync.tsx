import * as React from "react";
import * as ReactDOM from "react-dom";

// Sync Mode
const root = document.getElementById("root") as HTMLElement;
ReactDOM.render(<App />, root);

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

function App() {
  return (
    <>
      <Article articlePath="article1.json"></Article>
      <Article articlePath="article2.json"></Article>
      <Article articlePath="article3.json"></Article>
    </>
  );
}

function Article({ articlePath }) {
  const [article, setArticle] = React.useState<any>(null);
  React.useEffect(() => {
    fetchAPI(articlePath).then(resp => setArticle(resp));
    //少了CANCEL
  }, []);
  return (
    <>
      {article ? (
        <>
          <h2>{article.title}</h2>
          <hr />
          <h3>作者：{article.author}</h3>
          <h3>發表日期：{article.date}</h3>
          <pre>{article.content}</pre>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
