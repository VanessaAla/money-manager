import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  //const [balance, setBalance] = useState(0);
  const [customAmount, setCustomAmount] = useState(0); // add custom amount, so we need useState while using Redux
  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          //setBalance(balance + 10);
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <br />
      <br />
      <input
        type="number"
        value={customAmount}
        onChange={(e) => {
          setCustomAmount(parseInt(e.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch(deposit(customAmount));
          setCustomAmount(0);
        }}
      >
        Deposit custom amount
      </button>
    </div>
  );
}

export default App;
