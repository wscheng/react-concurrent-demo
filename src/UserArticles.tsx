import * as React from "react";
import { getUserAritcles as getUserArticles } from "./fakeAPI";

export const UserArticles = ({ userId }) => {
  const articles = getUserArticles(userId).read();
  return <div>{articles}</div>;
};

export default UserArticles;
