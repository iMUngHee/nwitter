import { authService } from "fbInstance";
import { useEffect, useState } from "react";
import Router from "components/Router";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setUserObj(user);
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Router isLoggedIn={Boolean(userObj)} userObj={userObj} /> : "Initializing" }
    </>
  );
}

export default App;
