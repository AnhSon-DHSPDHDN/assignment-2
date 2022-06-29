import { TASK_TYPE } from "../../constants/taskTypes";

export const actGetAllTasks = () => {
  return {
    type: TASK_TYPE.GET_ALL_TASK
  }
}

export const actGetTaskById = (id) => {
  return {
    type: TASK_TYPE.GET_TASK_BY_ID,
    payload: id
  }
}

export const actAddNewTask = (payload) => {
  return {
    type: TASK_TYPE.ADD_NEW_TASK,
    payload: payload
  }
}