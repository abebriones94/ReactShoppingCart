import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Greeter from "./Greeter";
import Counter from "./Counter";
import MoodToggler from "./MoodToggler";
import Cart from "./Cart";

// Create an array of 5 id, name, price, and qty for Mexico Taco Cart //
const items = [
  { id: 1, name: "Taco", price: 2.5, qty: 2 },
  { id: 2, name: "Burrito", price: 3.5, qty: 3 },
  { id: 3, name: "Quesadilla", price: 4.5, qty: 1 },
];

function App() {
  return (
    <div>
      <Cart initialItems={items} />
      <Navbar />
      <Greeter name="Abe" />
      <Counter />
      <Counter step={5} />
      <MoodToggler />
    </div>
  );
}

export default App;
