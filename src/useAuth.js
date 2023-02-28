import { useState } from "react";

export default function useAuth(initialValue, delayTime = 1000) {
  const [isAuth, setIsAuth] = useState(initialValue);

  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, delayTime);
  }

  function logout() {
    setTimeout(() => {
      setIsAuth(false);
    }, delayTime);
  }

  return [isAuth, login, logout];
}
