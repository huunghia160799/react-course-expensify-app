import uuid from "uuid";

// add expense
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// remove expense
export const removeExpense = ({ id } = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id: id
    }
};

// edit expense
export const editExpense = (id, update) => {
    return {
        type: "EDIT_EXPENSE",
        id: id,
        update: update
    }
};