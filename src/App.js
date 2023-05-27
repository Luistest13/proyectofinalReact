import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND </h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Codigo incorrecto//

// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<ItemListContainer />} />
//           <Route path="/category/:categoryId" element={<ItemListContainer />} />
//           <Route path="/item/:itemId" element={<ItemDetailContainer />} />
//           <Route path="*" element={<h1>404 NOT FOUND</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
