import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./Layout/WebsiteLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
