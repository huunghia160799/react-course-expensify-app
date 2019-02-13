import { addExpense, editExpense, removeExpense } from "../../actions/expense.js";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: 12345 });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: 12345
  })
});

test("should setup edit expense action object", () => {
  const action = editExpense(12345, {
    note: "New note value"
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: 12345,
    update: {
      note: "New note value"
    }
  });
});

test("should setup add expense action object", () => {
  const expenseDate = {
    description: "Rent",
    amount: 12345,
    createdAt: 1000,
    note: "Last month rent"
  };

  const action = addExpense(expenseDate);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseDate,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default value", () => {
  const expenseDate = {};

  const action = addExpense(expenseDate);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});