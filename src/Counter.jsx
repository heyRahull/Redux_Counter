import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count Value is : {countValue}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br /> <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
