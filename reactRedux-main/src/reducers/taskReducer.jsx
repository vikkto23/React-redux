const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, ...action.payload } : task
          ),
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  