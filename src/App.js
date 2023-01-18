import './App.css';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import {Routes, Route} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path='categories' element={<CategoriesPage />} />
              <Route path='categories/:category_name' element={<ProductsPage />} />
              <Route path='products/:product_id' element={<ProductPage />} />
              <Route path='about_us' element={<AboutUsPage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
