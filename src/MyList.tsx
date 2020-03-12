import * as React from "react";
import { users } from "./users";

function ListItem({ children }) {
  return <div className="ListItem">{children}</div>;
}

export default React.memo<{ filterText: string }>(function MyList({
  filterText
}) {
  const userdata = filterText
    ? users.filter(user => user.first_name.includes(filterText))
    : users;

  return (
    <>
      <div>Name</div>
      {userdata.map(user => (
        <ListItem>{user.first_name}</ListItem>
      ))}
    </>
  );
});

// export default function MyList({ filterText }) {
//   const userdata = filterText
//     ? users.filter(user => user.first_name.includes(filterText))
//     : users;

//   return (
//     <>
//       <div>Name</div>
//       {userdata.map(user => (
//         <ListItem>{user.first_name}</ListItem>
//       ))}
//     </>
//   );
// }

// export default MyList;
