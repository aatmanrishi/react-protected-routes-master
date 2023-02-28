import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        auth ? (
          <Component />
        ) : (
          <Navigate to={{ pathname: "/", state: { from: rest.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
