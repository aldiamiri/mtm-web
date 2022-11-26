import LandingPage from "./LandingPage";
import InputData from "./Component/FormInput/Index";
import InputMerk from "./Component/FormInputMerk/Index";
import InputCarousel from "./Component/FormInputCarousel/Index";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/input" element={<InputData />} />
          <Route path="/merk" element={<InputMerk />} />
          <Route path="/carousel" element={<InputCarousel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
