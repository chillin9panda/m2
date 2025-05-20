import BackendTest from "./BackendTest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="app-content">
        <Routes>
          <Route path="/test" element={<BackendTest />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
