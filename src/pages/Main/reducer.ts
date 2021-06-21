import { IMainAction, CREATE_TASK, CLEAR_TASKS, Task, DELETE_TASK, CHANGE_TASK } from './actions';

export interface IMainState {
  tasks: Task[];
}

export const initialState: IMainState = {
  tasks: []
};

export const mainSelector = (state: { main: IMainState }) => state.main;

export function main(state = initialState, action: IMainAction) {
  switch (action.type) {
    case CREATE_TASK: {
      const { payload: { task } } = action;

      return {
        ...state,
        tasks: [...state.tasks, task],
      };
    }

    case DELETE_TASK: {
      const { payload: { id } } = action;

      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id)
      }
    }

    case CHANGE_TASK: {
      const { payload: { id } } = action;
      

      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task),
      }
    }

    case CLEAR_TASKS: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}
