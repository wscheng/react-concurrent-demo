import * as React from "react";
import { getProfile } from "./fakeAPI";

export const Profile = ({ userId }) => {
  const name = getProfile(userId);
  return <div>{name}</div>;
};

export default Profile;
