import { authService } from "fbInstance";
import { useState } from "react";
import Router from "components/Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>
        &copy; {new Date().getFullYear()} Nwitter
      </footer>
    </>
  );
}

export default App;
