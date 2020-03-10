import * as React from "react";
import * as ReactDOM from "react-dom";
import { Suspense, SuspenseList } from "react";
import Profile from "./Profile";
import UserArticles from "./UserArticles";
import { getOwnerProfile } from "./fakeAPI";

// Sync Mode
// ReactDOM.render(<App />, document.getElementById("root"));

// Concurrent Mode
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

const ownerProfileResource = getOwnerProfile();

function App() {
  const [ownerProfile, setOwnerProfile] = React.useState(ownerProfileResource);
  const userIds = [0, 1, 2];
  const { name, userId } = ownerProfile.read();
  return (
    <>
      <SuspenseList>
        Page Owner: {name}
        {userIds.map(userId => (
          <Suspense fallback={<div> loading...</div>}>
            <UserCardComponent userId={userId} />
          </Suspense>
        ))}
      </SuspenseList>
    </>
  );
}

function UserCardComponent(userId) {
  return (
    <>
      <Profile userId={userId}></Profile>
      <UserArticles userId={userId}></UserArticles>
    </>
  );
}
