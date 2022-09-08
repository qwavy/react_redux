import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import BootstrapNavBar from './BootstrapNavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Countries from './Countries'
import Quota from './Quota'


function App() {
  return (
    <BrowserRouter>
      <BootstrapNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        {/* <Route path='/countries' element={<Countries/>}/> */}
        <Route path='/quota' element={<Quota/>}/>
       
      </Routes>
    </BrowserRouter>

  )
}

export default App;
