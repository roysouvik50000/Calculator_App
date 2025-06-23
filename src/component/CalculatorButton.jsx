import { CalculatorContext } from "../calculatorContext";
import { useContext } from "react";
import * as motion from "motion/react-client";

export default function CalculatorButton({ buttonText, buttonValue }) {
  const { setResult, inputText, setInputText } = useContext(CalculatorContext);
  const box = {
    borderRadius: 50,
    width:48,
    height:48,
    margin:8,
}

  const buttonClickHandeler = (btx) => {
    if (btx === "=") {
      const res = Number(eval(inputText));
      if (isNaN(res)) {
        setInputText("!!ERR");
      } else {
        setResult(res);
      }
    } else if (btx === "AC") {
      setInputText("");
      setResult("");
    } else if (btx === "⌫") {
      setInputText((curr) => curr.slice(0, -1));
    } else {
      setInputText((curr) => `${curr}${btx}`);
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
            className="bg-amber-300 p-3 m-2 rounded-full h-12 w-12 cursor-pointer text-xl font-black"
            type="button"
            onClick={() => {
              buttonClickHandeler(buttonValue);
            }}
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
    </>
  );
}
