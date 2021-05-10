import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  { amount: 50, category: "Food", type: "Expense", date: "2021-05-10", id: "d8d39484-b1af-4102-9539-c85969a6e324" },
  { amount: 100, category: "House", type: "Expense", date: "2021-05-10", id: "7cef863b-4b4a-4237-a38c-b09164c9eca2" },
  { amount: 700, category: "Business", type: "Income", date: "2021-05-10", id: "11d121b9-a0a3-4ed6-888e-a9239aff8de3" },
  { amount: 1200, category: "Salary", type: "Income", date: "2021-05-10", id: "251b88f3-5ed5-4c95-892a-e3d6948f99bf" },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action Creators
  const deleteTransaction = (id) => dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (transaction) => dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  // console.log(transactions);

  const balance = transactions.reduce(
    (acc, currVal) => (currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount),
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
