import { useCounterStore } from "./store";

const Other = () => {
  const counter = useCounterStore();
  return (
    <div>
      <h1>Other</h1>
      <div>
        <div>{counter.count}</div>
        <button onClick={counter.increament}>+1</button>
      </div>
    </div>
  );
};

export default Other;
