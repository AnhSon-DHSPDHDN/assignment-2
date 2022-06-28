import { TASK_TYPE } from "../../constants/taskTypes"

const initialState = {
  tasksList: [],
  taskDetail: {},
}

export const tasksReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case TASK_TYPE.GET_ALL_TASK:
        console.log('act get all task');
        return { ...state }
      case TASK_TYPE.GET_TASK_BY_ID:
        console.log(action, 'action');
        return { ...state }
      case TASK_TYPE.ADD_NEW_TASK:
        const newTask = { ...action.payload, status: 'new' };
        return {
          ...state,
          tasksList: [...state.tasksList, newTask]
        }
      default:
        return state
    }
  }