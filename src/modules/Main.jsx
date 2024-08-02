import { Routes, Route } from 'react-router-dom';

import { Promo } from './Promo';
import { Products } from './Products';
import { Cart } from './Cart';
import { Order } from './Order';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path='/' element={
          <>
            <Promo />
            <Products />
          </>
        } />
        
        <Route path='/cart' element={
          <>
            <Cart />
            <Order />
          </>
        }/>
      </Routes>

      
    </main>
  );
};

export { Main };