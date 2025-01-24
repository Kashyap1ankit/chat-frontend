import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import Navbar from "./components/navbar";
import MainLayout from "./components/main-layout";

function App() {
  return (
    <div className="bg-gradient-to-r to-primary-bg from-secondary-bg min-h-screen">
      <Router>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
