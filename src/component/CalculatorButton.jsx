import { CalculatorContext } from "../calculatorContext";
import { useContext } from "react";
export default function CalculatorButton({ buttonText , buttonValue}) {
  const {setResult, inputText, setInputText } =
    useContext(CalculatorContext);

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
        <button
          className="bg-amber-300 p-3 m-2 rounded-full h-12 w-12 cursor-pointer text-xl font-black"
          type="button"
          onClick={() => {
            buttonClickHandeler(buttonValue);
          }}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
