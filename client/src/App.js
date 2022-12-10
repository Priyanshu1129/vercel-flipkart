import Header from './Components/header/Header'
import Home from './Components/home/Home'
import { Box } from '@mui/system';
import DataProvider from './Context/DataProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './Components/Details/ProductDetail'
import Cart from './Components/Cart/Cart'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
            <Box style={{marginTop: '80px'}}>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/cart' element={<Cart />}/>
          </Routes>
            </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App