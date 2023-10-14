import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
