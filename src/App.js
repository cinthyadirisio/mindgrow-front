import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/header.css';
import Home from './pages/Home';
import WhyMindGrowPage from './pages/WhyMindGrowPage'
import NotFound from './pages/NotFound';
import WebsiteLayout from './layouts/WebsiteLayout'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'
import ProductsPage from './pages/ProductsPage';
import DetailsPage from './pages/DetailsPage';



function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/whymindgrow' element={<WhyMindGrowPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/products/:id' element={<DetailsPage />} />
          <Route path='/*' element={<NotFound />} />


        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
