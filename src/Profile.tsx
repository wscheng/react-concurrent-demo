import * as React from "react";
import { getProfile } from "./fakeAPI";

export const Profile = ({ resource, userId }) => {
  //const profileRes = getProfile(userId).read();
  const name = resource.read("profile/" + userId);
  //const [ownerProfile, setOwnerProfile] = React.useState(ownerProfileResource);
  React.useEffect(() => {
    console.log("Profile mounted", userId);
  }, []);
  return <div>{name}</div>;
};

export default Profile;
