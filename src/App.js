import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/header.css';
import Products from './pages/Products';
import Home from './pages/Home';
import WhyMindGrowPage from './pages/WhyMindGrowPage'
import NotFound from './pages/NotFound';
import WebsiteLayout from './layout/WebsiteLayout'




function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/whymindgrow' element={<WhyMindGrowPage />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
