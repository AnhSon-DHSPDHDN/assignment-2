import { TASKS_KEY } from "../../constants/keyLocalstorage";
import { TASK_STATUS } from "../../constants/shares";
import { TASK_TYPE } from "../../constants/taskTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasksList: JSON.parse(localStorage.getItem(TASKS_KEY)) || [],
  taskDetail: {},
}

export const tasksReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case TASK_TYPE.GET_ALL_TASK:
        return {
          ...state,
          tasksList: JSON.parse(localStorage.getItem(TASKS_KEY)) || [],
          taskDetail: {}
        }
      case TASK_TYPE.GET_TASK_BY_ID:
        const id = action.payload
        const taskDetail = state.tasksList.find(task => task?.id === id)
        return { ...state, taskDetail: taskDetail }
      case TASK_TYPE.ADD_NEW_TASK:
        const newTask = { ...action.payload, status: TASK_STATUS.NEW, id: uuidv4() };
        const tasks = [...state.tasksList, newTask]
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
        return {
          ...state,
          tasksList: tasks
        }
      default:
        return state
    }
  }