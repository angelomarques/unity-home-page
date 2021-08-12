import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from "./contexts/AuthContext";
import Home from './pages/Home';

import styles from "./styles/global.scss";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Menu />
        <Home />
        <Sidebar />
      </div>
    </AuthProvider>
  );
}

export default App;
