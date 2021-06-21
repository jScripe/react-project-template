import { AnyAction } from 'redux';

export const CREATE_TASK = 'CREATE_TASK';
export const CLEAR_TASKS = 'CLEAR_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';

export interface Task {
    id: number;
    value: string;
    isCompleted: boolean;
};

export interface ICreateTask extends AnyAction {
    type: typeof CREATE_TASK;
    payload: {
        task: Task;
    }
}

export const createTask = (task: string): ICreateTask => {
    return {
        type: CREATE_TASK,
        payload: {
            task: {
                value: task,
                id: Date.now(),
                isCompleted: false,
            }
        }
    }
}

export interface IDeleteTask extends AnyAction {
    type: typeof DELETE_TASK;
    payload: {
        id: number;
    }
}

export const deleteTask = (id: number): IDeleteTask => {
    return {
        type: DELETE_TASK,
        payload: {
            id,
        },
    }
}

export interface IChangeTask extends AnyAction {
    type: typeof CHANGE_TASK;
    payload: {
        id: number;
    }
}

export const changeTask = (id: number): IChangeTask => {
    return {
        type: CHANGE_TASK,
        payload: {
            id,
        },
    }
}

export interface IClearTasks extends AnyAction {
    type: typeof CLEAR_TASKS;
}

export const clearTasks = (): IClearTasks => {
    return {
        type: CLEAR_TASKS
    }
}

export type IMainAction = ICreateTask | IClearTasks | IDeleteTask | IChangeTask;