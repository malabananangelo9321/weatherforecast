import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import IndexLandingPage from "./pages/landing/pageComponents/IndexLandingPage";
import TopNavigation from "./components/navigation/TopNavigation";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TopNavigation />}>
          <Route path="/" element={<IndexLandingPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
