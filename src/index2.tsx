import * as React from "react";
import * as ReactDOM from "react-dom";
import { Suspense, SuspenseList } from "react";
import Profile from "./Profile";
import UserArticles from "./UserArticles";
import { getOwnerProfile } from "./fakeAPI";
import { unstable_createResource } from "react-cache";

// Sync Mode
// ReactDOM.render(<App />, document.getElementById("root"));

// Concurrent Mode
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

const ownerProfileResource = getOwnerProfile();

function fetchAPI(path) {
  return new Promise<string>(resovle => {
    console.log("get resource from path");
    setTimeout(() => {
      resovle(path + " loaded!");
    }, 3000 * Math.random());
  });
}

const APIresource = unstable_createResource<string, string>(path =>
  fetchAPI(path)
);

function App() {
  const userIds = [0, 1, 2];
  React.useEffect(() => {
    console.log("App mounted");
  }, []);
  return (
    <>
      <SuspenseList>
        <Suspense fallback={<div> loading owner profile...</div>}>
          <OwnerProfile />
        </Suspense>
        {/* {userIds.map(userId => (
          <Suspense fallback={<div> loading...</div>}>
            <Profile resource={APIresource} userId={userId} />
          </Suspense>
        ))} */}
      </SuspenseList>
    </>
  );
}

function OwnerProfile() {
  //const { name, userId } = ownerProfileResource.read();
  const owner = APIresource.read("OwnerAPI/wscheng");
  return <h1>Page Owner: {owner}</h1>;
}

// function UserCardComponent(userId) {
//   return (
//     <>
//       <Profile userId={userId}></Profile>
//       <UserArticles userId={userId}></UserArticles>
//     </>
//   );
// }
