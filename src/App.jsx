import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const handleAddToCart = (title) => {
    setCount((prev) => prev + 1);
    setLastAdded(title);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CvSU Mini Store</h1>
        <p className="cart-message">
          {count === 0
            ? "Your cart is empty."
            : `Items added to cart: ${count} (Last added: ${lastAdded})`}
        </p>
      </header>

      <main className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.id === 2 && <span>New</span>}
            {product.id === 5 && <span>Sale</span>}
          </ProductCard>
        ))}
      </main>
    </div>
  );
}

export default App;