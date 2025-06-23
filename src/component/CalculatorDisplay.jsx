import { CalculatorContext } from "../calculatorContext";
import { useContext } from "react";
export default function CalculatorDisplay() {
  const { result, setResult, inputText, setInputText } =
    useContext(CalculatorContext);
  return (
    <div className="flex flex-col justify-center">
      <input
        className="bg-amber-200 w-80 rounded-t-2xl p-2 lg:mt-1.5  outline-none text-3xl"
        type="text"
        value={inputText}
        name="calulartorDisplay"
        id="calulartorDisplay"
        readOnly
      />

      <input
        className="bg-amber-200 w-80 rounded-b-2xl p-2 lg:mb-1.5 outline-none text-3xl"
        type="text"
        value={result}
        readOnly
        name="calulartorDisplay"
        id="calulartorDisplay"
      />
    </div>
  );
}
