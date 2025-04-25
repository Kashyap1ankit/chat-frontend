import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import Navbar from "./components/navbar";
import MainLayout from "./components/main-layout";
import Providers from "./components/providers";

function App() {
  return (
    <Providers>
      <div className="bg-gradient-to-r to-primary-bg from-secondary-bg min-h-screen">
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Providers>
  );
}

export default App;
