import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import AppNavbar from './components/AppNavbar'
import Favorites from './pages/Favorites'
import Login from './pages/Login'
import ProductsDetail from './pages/ProductsDetail'
import Loader from './components/Loader'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';

function App() {
  
  const isLoading = useSelector( state => state.isLoading)

  return (
    <HashRouter>
      { 
       isLoading && <Loader />
      }

      <AppNavbar/>
      <Container>
        <Routes fluid>
          <Route 
            element={ <Home/>}
            path='/'
          />       
          <Route 
            element={ <Login/>}
            path='/login'
          />
          <Route 
            element={ <ProductsDetail/>}
            path='/products/:id'
          />
          {/*Rutas Protegidas
          /purchases
          */}
          <Route 
            element={ <Favorites/>}
            path='/favorites'
          />        
        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
