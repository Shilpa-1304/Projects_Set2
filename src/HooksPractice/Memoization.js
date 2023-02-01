import { useMemo, useState } from "react";

export default function Memoization() {
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState(1);
  const memoizedResult = useMemo(() => findFactorial(number), [number]);
  console.log("Facto: " + memoizedResult);
  return (
    <>
      <input
        type="number"
        placeholder="Type Number..."
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <div>Factorial: {memoizedResult}</div>
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
