
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutsection from './Components/Aboutsection';
import Electrical from './Components/product page/Electrical';
import ContactUs from './Components/Contactus';
import Brands from './Components/Brands';
import Sanitaryware from './Components/product page/Sanitary';
import Tools from './Components/product page/Tools';
import Powertools from './Components/product page/Powertools';
import Ironmongery from './Components/product page/Ironmongery';
import Fittings from './Components/product page/Fittings';
import Pipes from './Components/product page/Pipes';
import Others from './Components/product page/Others';

function App() {

  <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
</style>
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <div className='overflow-x-hidden'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<Aboutsection/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/brands' element={<Brands/>}></Route>
      <Route path='/products/electrical' element={<Electrical/>}></Route>
      <Route path='/products/sanitaryware' element={<Sanitaryware/>}></Route>
      <Route path='/products/tools' element={<Tools/>}></Route>
      <Route path='/products/powertools' element={<Powertools/>}></Route>
      <Route path='/products/ironmongery' element={<Ironmongery/>}></Route>
      <Route path='/products/fittings' element={<Fittings/>}></Route>
      <Route path='/products/pipes' element={<Pipes/>}></Route>
      <Route path='/products/others' element={<Others/>}></Route>
      {/* <Route path='/' element={<HomePage/>}></Route> */}
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App

