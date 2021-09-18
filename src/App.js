import React, { useContext } from "react";

export const UserContext = React.createContext();

function User() {
  const name = useContext(UserContext);

  return <h1>{name.one}</h1>;
}

function Two() {
  const name = useContext(UserContext);

  return <h5>{name.two}</h5>;
}

export default function App() {
  const names = {
    one: "Pedro",
    two: "Henrique",
  };

  return (
    <UserContext.Provider value={names}>
      <User />
      <Two />
    </UserContext.Provider>
  );
}
