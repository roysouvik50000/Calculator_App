import { CalculatorContext } from "../calculatorContext";
import { useContext } from "react";
import * as motion from "motion/react-client";

export default function CalculatorButton({ buttonText, buttonValue , displayValue }) {
  const { setResult, inputText, setInputText , displayText, setDisplayText} = useContext(CalculatorContext);
  const box = {
    borderRadius: 50,
    width:48,
    height:48,
    margin:12,
}

  const buttonClickHandeler = (btx , displayValue ) => {
    if (btx === "=") {
      const res = Number(eval(inputText));
      if (isNaN(res)) {
        setInputText("");
        setDisplayText("!!ERR");
      } else {
        setResult(res.toFixed(3));
      }
    } else if (btx === "AC") {
      setInputText("");
      setDisplayText("")
      setResult("");
    } else if (btx === "⌫") {
      setInputText((curr) => curr.slice(0, -1));
      setDisplayText((curr) => curr.slice(0, -1));
    } else {
      setInputText((curr) => `${curr}${btx}`);
      setDisplayText((curr) => `${curr}${displayValue}`);
    }
  };
  return (
    <>
      <div className="w-1/4 flex justify-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={box}
      >
          <button
            className="bg-amber-300 p-2 text-center rounded-full h-12 w-12 cursor-pointer text-xl font-black"
            type="button"
            onClick={() => {
              buttonClickHandeler(buttonValue , displayValue);
            }}
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
    </>
  );
}
