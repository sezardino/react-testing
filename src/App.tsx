import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [buttonColor, setButtonColor] = useState<"blue" | "red">("red");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const nextButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <>
      <h1>Hello world</h1>
      <button
        className={isButtonDisabled ? styles.grey : styles[buttonColor]}
        disabled={isButtonDisabled}
        onClick={() => setButtonColor(nextButtonColor)}
      >
        Change to {nextButtonColor}
      </button>
      <label>
        <input
          type="checkbox"
          checked={isButtonDisabled}
          onChange={() => setIsButtonDisabled((prev) => !prev)}
        />
        Disable button
      </label>
    </>
  );
}

export default App;
