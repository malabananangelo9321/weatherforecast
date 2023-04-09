import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import IndexLandingPage from "./pages/landing/pageComponents/IndexLandingPage";
import TopNavigation from "./components/navigation/TopNavigation";
import { useAuth0 } from "@auth0/auth0-react";
import IndexHomePage from "./pages/home/pageComponents/IndexHomePage";
import IndexWeatherPage from "./pages/weather/pageComponents/IndexWeatherPage";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TopNavigation />}>
          {!isAuthenticated ? (
            <Route path="/" element={<IndexLandingPage />} />
          ) : (
            <>
              <Route path="/" element={<IndexHomePage />} />
              <Route path="/home" element={<IndexHomePage />} />
              <Route path="/weather/:search" element={<IndexWeatherPage />} />
            </>
          )}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
