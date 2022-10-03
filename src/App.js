import './styles/header.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import WhyMindGrowPage from './pages/WhyMindGrowPage'
import WebsiteLayout from './layout/WebsiteLayout'


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
