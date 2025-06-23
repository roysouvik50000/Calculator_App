import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";


export default function Calculator() {
  const allCalculatorButton = [
  { btnText: "sin", btnValue: "Math.sin(Math.PI/180*" , displayValue:"sin(" },
  { btnText: "cos", btnValue: "Math.cos(Math.PI/180*" , displayValue:"cos("},
  { btnText: "tan", btnValue: "Math.tan(Math.PI/180*" , displayValue:"tan("},
  { btnText: ")", btnValue: ")" , displayValue:")"},
  { btnText: "log", btnValue: "Math.log10(" , displayValue:"log10("},
  { btnText: "e", btnValue: "Math.E" , displayValue:"e"},
  { btnText: "√", btnValue: "Math.sqrt(" , displayValue:"√"},
  { btnText: "^", btnValue: "**" , displayValue:"^"},
  { btnText: "AC", btnValue: "AC" , displayValue:""},
  { btnText: "%", btnValue: "*100" , displayValue:"%"},
  { btnText: "⌫", btnValue: "⌫" , displayValue:""},
  { btnText: "÷", btnValue: "/" , displayValue:"÷"},
  { btnText: "7", btnValue: "7" , displayValue:"7"},
  { btnText: "8", btnValue: "8" , displayValue:"8"},
  { btnText: "9", btnValue: "9" , displayValue:"9"},
  { btnText: "×", btnValue: "*" , displayValue:"×"},
  { btnText: "4", btnValue: "4" , displayValue:"4"},
  { btnText: "5", btnValue: "5" , displayValue:"5"},
  { btnText: "6", btnValue: "6" , displayValue:"6"},
  { btnText: "-", btnValue: "-" , displayValue:"-"},
  { btnText: "1", btnValue: "1" , displayValue:"1"},
  { btnText: "2", btnValue: "2" , displayValue:"2"},
  { btnText: "3", btnValue: "3" , displayValue:"3"},
  { btnText: "+", btnValue: "+" , displayValue:"+"},
  { btnText: "π", btnValue: "Math.PI" , displayValue:"π"},
  { btnText: "0", btnValue: "0" , displayValue:"0"},
  { btnText: ".", btnValue: "." , displayValue:"0"},
  { btnText: "=", btnValue: "=" , displayValue:""}
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
              displayValue={v.displayValue}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
