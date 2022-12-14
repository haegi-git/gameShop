import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Cart from './page/Cart';
import GamesDetail from './page/GamesDetail';

// subPage
import Home from './page/Home';
import Payment from './page/Payment';
import All from './subpage/All';
import Puzzel from './subpage/Puzzel';
import Simulation from './subpage/Simulation';
import Survival from './subpage/Survival';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/games' element={<All/>} />
          <Route path='/puzzel' element={<Puzzel/>}/>
          <Route path='/simulation' element={<Simulation/>}/>
          <Route path='/Survival' element={<Survival/>}/>
          <Route path='/gamesdetail/:id' element={<GamesDetail/>}/>

          
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
