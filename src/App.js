
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectedCity from "./pages/SelectedCity";
import Cams from './pages/Cams'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected" element={<SelectedCity />} />
        <Route path = '/allCams' element={<Cams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

