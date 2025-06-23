import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";


export default function Calculator() {
  const allCalculatorButton = [
  { btnText: "sin", btnValue: "Math.sin(" },
  { btnText: "cos", btnValue: "Math.cos(" },
  { btnText: "tan", btnValue: "Math.tan(" },
  { btnText: ")", btnValue: ")" },
  { btnText: "log", btnValue: "Math.log10(" },
  { btnText: "e", btnValue: "Math.E" },
  { btnText: "√", btnValue: "Math.sqrt(" },
  { btnText: "^", btnValue: "**" },
  { btnText: "AC", btnValue: "AC" },
  { btnText: "%", btnValue: "%" },
  { btnText: "⌫", btnValue: "⌫" },
  { btnText: "/", btnValue: "/" },
  { btnText: "7", btnValue: "7" },
  { btnText: "8", btnValue: "8" },
  { btnText: "9", btnValue: "9" },
  { btnText: "*", btnValue: "*" },
  { btnText: "4", btnValue: "4" },
  { btnText: "5", btnValue: "5" },
  { btnText: "6", btnValue: "6" },
  { btnText: "-", btnValue: "-" },
  { btnText: "1", btnValue: "1" },
  { btnText: "2", btnValue: "2" },
  { btnText: "3", btnValue: "3" },
  { btnText: "+", btnValue: "+" },
  { btnText: "π", btnValue: "Math.PI" },
  { btnText: "0", btnValue: "0" },
  { btnText: ".", btnValue: "." },
  { btnText: "=", btnValue: "=" }
]

  return (
    <>
      <div
        className="border-y-amber-300 lg:border-4 lg:rounded-3xl py-3 px-3 lg:h-96 min-h-screen lg:w-96 max-w-screen mx-auto flex flex-col items-center justify-around bg-black"
        id="calculator"
      >
        <h1 className="font-bold text-yellow-500 lg:text-2xl text-xl">CALCULATOR</h1>
        <CalculatorDisplay/>

        <div className="flex flex-wrap lg:px-4">
          {allCalculatorButton.map((v, i) => (
            <CalculatorButton
              buttonText={v.btnText}
              buttonValue={v.btnValue}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
