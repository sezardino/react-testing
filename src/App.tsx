import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [buttonColor, setButtonColor] = useState<"blue" | "red">("red");

  const nextButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <>
      <h1>Hello world</h1>
      <button
        className={styles[buttonColor]}
        onClick={() => setButtonColor(nextButtonColor)}
      >
        Change to {nextButtonColor}
      </button>
    </>
  );
}

export default App;
