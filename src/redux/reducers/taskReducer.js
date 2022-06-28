import { TASKS_TYPE } from "../../constants/tasksListType"

const initialState = {
  tasksList: [],
  taskDetail: {},
}

export const tasksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_TYPE.GET_ALL_TASKS:
      console.log('hiha');
      return { ...state }
    default:
      return state
  }
}