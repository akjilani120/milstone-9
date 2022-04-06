
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Order from './Components/Order/Order';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Shop/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/order' element={<Order></Order>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='*' element={<ErrorPage></ErrorPage>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
