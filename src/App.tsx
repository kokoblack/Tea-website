import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [items, setItems] = useState([])

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  });

  // TODO: Update list when url changes or on mount
  // TODO: Setup resize event listener on mount
  // TODO: Cleanup resize event listener on un-mount

  return (
    <>
      <div>Window Width: {windowWidth}</div>
    </>
  );
}

export default App;
