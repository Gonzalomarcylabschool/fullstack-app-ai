import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import MoreInfoPage from "./pages/MoreInfoPage"
import SignUpPage from "./pages/SignUpPage"
import "./App.css"
import React from "react"

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/more-info" element={<MoreInfoPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
