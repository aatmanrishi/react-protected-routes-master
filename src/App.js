import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AccountComponent from "./pages/AccountComponent";
import CardsComponent from "./pages/CardsComponent";
import ProtectedRoute from './ProtectedRoute';
import useAuth from "./useAuth";


function App() {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <div className="ui container">
      <h2>Protected Routes Tutorial</h2>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts (Protected)</Link>
            </li>
            <li>
              <Link to="/cards">Cards (UnProtected)</Link>
            </li>
          </ul>
          {isAuth ? (
            <>
              <div className="ui message brown">You are logged in..</div>
              <button className="ui button blue" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="ui message violet">You are logged out..</div>
              <button className="ui button blue" onClick={login}>
                Login
              </button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/cards" element={<CardsComponent />} />
          <Route
            path="/accounts"
            element={<ProtectedRoute auth={isAuth} component={AccountComponent} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
