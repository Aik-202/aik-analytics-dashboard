import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import './App.css'
import { OverviewPage } from "./Pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<OverviewPage />} ></Route>
      </Routes>
    </Router>
  )
}