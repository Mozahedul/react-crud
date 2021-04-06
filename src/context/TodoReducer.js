export const initialState = {
  todoList: [],
};

const TodoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [...state.todoList, action.item],
      };
    }

    default:
      return state;
  }
};

export default TodoReducer;
