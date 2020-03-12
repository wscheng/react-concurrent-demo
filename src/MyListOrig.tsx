import * as React from "react";
import { users } from "./users";

// for (let i = 0; i < 3000; i++) {
//   users.push({ ...users[0], id: 1001 + i });
// }

export default React.memo<{ filterText: string }>(function MyList({
  filterText
}) {
  const userdata = filterText
    ? users.filter(
        user =>
          user.first_name.includes(filterText) ||
          user.last_name.includes(filterText) ||
          user.email.includes(filterText) ||
          user.job_title.includes(filterText) ||
          user.gender.includes(filterText) ||
          user.car_model.includes(filterText)
      )
    : users;

  // for (var i = 0; i < 43000; i++) {
  //   userdata.sort((a, b) => b.id - a.id);
  //   userdata.sort((b, a) => b.id - a.id);
  // }

  //userdata.sort((b, a) => b.id - a.id);
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>gender</th>
          <th>email</th>
          <th>job title</th>
          <th>car model</th>
        </tr>
        {userdata.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.gender}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.job_title}</td>
            <td>{user.car_model}</td>
          </tr>
        ))}
      </table>
    </>
  );
});

// export default MyList;
