import React from 'react'
import bgImage from './images/bg-2image.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scr1 from './Screens/Scr1';
import Scr2 from './Screens/Scr2';
import Scr3 from './Screens/Scr3';
import Scr4 from './Screens/Scr4';
import Scr5 from './Screens/Scr5';
import Scr6 from './Screens/Scr6';

const App = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bgImage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Scr1 />}></Route>
          <Route exact path='/Scr1' element={<Scr1 />}></Route>
          <Route exact path='/Scr2' element={<Scr2 />}></Route>
          <Route exact path='/Scr3' element={<Scr3 />}></Route>
          <Route exact path='/Scr4' element={<Scr4 />}></Route>
          <Route exact path='/Scr5' element={<Scr5 />}></Route>
          <Route exact path='/Scr6' element={<Scr6 />}></Route>

        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}
export default App;
