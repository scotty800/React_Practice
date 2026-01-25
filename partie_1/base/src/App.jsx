import { useRef, useEffect } from "react";
import { useCallback, useState, useMemo } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        focus
      </button>
    </div>
  )
}

function RenderCounter() {
  const renderCounter = useRef(0);

  useEffect(() => {
    renderCounter.current += 1;
  });

  return <h2>Renders: {renderCounter.current}</h2>;
}


function Child({ onClick }) {
  console.log("child render");
  return <button onClick={onClick}>Click child</button>
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('child clicked');
  }, []);

  console.log("Parent render");
  
  return (
    <div>
      <h2>Parent count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child onClick={handleClick}/>
    </div>
  );
}

const products = [
  { id: 1, name: "Keyboard", price: 50 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Screen", price: 200 }
];

function ProductList() {
  const [count, setCount] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calcul du total");
    return products.reduce((acc, p) => acc + p.price, 0);
  }, []);

  return (
    <div>
      <h2>Total: {totalPrice} €</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
    </div>
  );
}


function App() {
  return (
    <div>
      <FocusInput/>
      <RenderCounter/>
      <Parent/>
      <ProductList/>
    </div>
  )
}

export default App;
