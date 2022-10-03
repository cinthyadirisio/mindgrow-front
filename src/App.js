import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/header.css';
import Products from './Pages/Products';
import Home from './Pages/Home';
import WhyMindGrowPage from './Pages/WhyMindGrowPage'
import WebsiteLayout from './Layout/WebsiteLayout'



function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/whymindgrow' element={<WhyMindGrowPage />} />

        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
