import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import  Navbar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Productos from './Secciones/Productos';
import Home from './Secciones/Home';
import Contacto from './Secciones/Contacto';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/cartContext';






function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Switch>

        <Route  exact path='/productos/:id'>
          <Productos/>
        </Route>

        <Route  exact path='/categorias/:categorias'>
          <ItemListContainer/>
        </Route>
        
        <Route  exact path='/'>
          <Home/>
        </Route>
          
        <Route  exact path='/contacto'>
          <Contacto/>
        </Route>

        <Route  exact path='/cart'>
          <Cart/>
        </Route>

      </Switch>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
