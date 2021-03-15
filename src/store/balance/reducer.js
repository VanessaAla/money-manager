const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "balance/deposit": {
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }

    case "balance/withdraw": {
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }

    case "balance/reset": {
      return {
        ...state,
        amount: initialState.amount, //resets the balance to its' initial value.
      };
    }

    default: {
      return state;
    }
  }
}
