import { useCallback, useState } from "react";

export default function CallbackHook() {
  const [number, setNumber] = useState(1);
  const callbackResult = useCallback(findFactorial(number), [number]);
  console.log("Facto: " + callbackResult);
  return (
    <>
      <h1> useCallback Hook </h1>
      <input
        type="number"
        placeholder="Type Number..."
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <div>Factorial: {callbackResult}</div>
    </>
  );
}
function findFactorial(n) {
  console.log(n);
  let result = 1;
  for (let x = 1; x <= n; x++) {
    result *= x;
  }

  return result;
}
