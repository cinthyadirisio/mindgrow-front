import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/header.css';
import Products from './pages/Products';
import Home from './pages/Home';
import WhyMindGrowPage from './pages/WhyMindGrowPage'
import NotFound from './pages/NotFound';
import WebsiteLayout from './layouts/WebsiteLayout'
<<<<<<< HEAD
=======
import SignIn from './pages/SignIn'
>>>>>>> fe206c5737814e7a9d754bd39d264e7c4910d6f2



function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/whymindgrow' element={<WhyMindGrowPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/*' element={<NotFound />} />


        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
