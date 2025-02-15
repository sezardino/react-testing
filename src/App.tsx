import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [buttonColor, setButtonColor] = useState<"blue" | "red">("red");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const nextButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <>
      <h1>Hello world</h1>
      <button
        className={styles[buttonColor]}
        disabled={isButtonEnabled}
        onClick={() => setButtonColor(nextButtonColor)}
      >
        Change to {nextButtonColor}
      </button>
      <label>
        <input
          type="checkbox"
          checked={isButtonEnabled}
          onChange={() => setIsButtonEnabled((prev) => !prev)}
        />
        Disable button
      </label>
    </>
  );
}

export default App;
