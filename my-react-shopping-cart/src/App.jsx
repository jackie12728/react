import { useState } from 'react';
import './App.css';
import ProductInput from './components/ProductInput';
import CartList from './components/CartList';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addProduct = (name, price) => {
    const newProduct = {
      id: cart.length > 0 ? Math.max(...cart.map((p) => p.id)) + 1 : 1,
      name,
      price: parseFloat(price),
    };
    setCart([...cart, newProduct]);
    setTotal(total + newProduct.price);
  };

  const removeProduct = (id) => {
    const productToRemove = cart.find((p) => p.id === id);
    setCart(cart.filter((p) => p.id !== id));
    setTotal(total - productToRemove.price);
  };

  const updateProduct = (id, newName, newPrice) => {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? { ...product, name: newName, price: newPrice }
        : product
    );
    const oldPrice = cart.find((product) => product.id === id).price;
    setCart(updatedCart);
    setTotal(total - oldPrice + newPrice);
  };

  return (
    <div>
      <h1>簡易購物車</h1>
      <ProductInput onAdd={addProduct} />
      <CartList cart={cart} onRemove={removeProduct} onUpdate={updateProduct} />
      <h2>總金額: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default App;
