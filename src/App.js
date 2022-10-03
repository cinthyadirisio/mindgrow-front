import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter className="App">
      {/* ScrollToTop */}
      {/* WebsiteLayout */}

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
