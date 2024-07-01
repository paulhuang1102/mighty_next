'use client';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../lib/features/counter/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Home;
