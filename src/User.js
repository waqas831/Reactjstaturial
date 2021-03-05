import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
const User = () => {
  const { name } = useParams();
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <h1>welcome{name} in react</h1>
      <h2>your currently location is{location.pathname}</h2>
      {location.pathname === `/User/waqas` ? (
        <button onClick={() => history.goBack()}>welcome</button>
      ) : null}
    </div>
  );
};
export default User;
