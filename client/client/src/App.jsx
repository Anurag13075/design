import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './pages/Navbar'
import { Signin } from './pages/Signin'

function  App () {

  return (
   <BrowserRouter>
   <Routes>
    <Route>
      <Route path='/auth' element={Signin}/>
      <Route path='/nav' element={Navbar}/>
    </Route>
   </Routes>
   
   </BrowserRouter>
  )
}


