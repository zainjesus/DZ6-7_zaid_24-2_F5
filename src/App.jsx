import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProductsPage from './pages/ProductsPage'
import BasketPage from './pages/BasketPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Home</h2>} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="basket" element={<BasketPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
