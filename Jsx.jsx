import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Projects/E com/Home'
import Cart from './Projects/E com/Cart'
import Navbar from './Projects/E com/Navbar'
import About from './Projects/E com/About'
import Data from './Projects/E com/Data'
import { useState } from 'react'


const App = () => {
  const[data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])

  function handleClick(item){
    setCart([...cart,item])
  }
  return (
    <div>
      <BrowserRouter>
      <Navbar data={data} setData={setData}setSearch={setSearch} size={cart.length}/>
      <Routes>
          <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path='/about/:aboutId' element={<About Data={Data}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
