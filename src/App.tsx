import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import WorkPage from "./pages/WorkPage/WorkPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/work/:id" element={<WorkPage />} />
    </Routes>
  );
}

export default App;
