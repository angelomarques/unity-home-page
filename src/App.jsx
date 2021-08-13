import { useState } from "react";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import AppHeader from "./components/AṕpHeader/AppHeader";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";

import "./styles/global.scss";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <div className="app">
        <AppHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className={isMenuOpen ? "container" : "container active"}>
          <Menu />
          <div className="appContent">
            <Home />
            <Sidebar />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
