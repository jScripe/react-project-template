import { Button, Input, List } from '@/components';
import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTask, clearTasks, createTask, deleteTask } from './actions';
import styles from './Main.scss';
import { mainSelector } from './reducer';

export const Main = () => {
    const [task, setTask] = useState<string>('');
    const dispatch = useDispatch();
    const { tasks } = useSelector(mainSelector);

    const handleChangeTask = useCallback((value: string) => {
        setTask(value);
    }, []);

    const handleButtonClick = useCallback(() => {
        dispatch(createTask(task));
        setTask('');
    }, [task, createTask, dispatch]);

    const handleChange = useCallback((id: number) => {
        dispatch(changeTask(id));
    }, [dispatch, changeTask]);

    const handleDelete = useCallback((id: number) => {
        dispatch(deleteTask(id));
    }, [dispatch, deleteTask]);

    const handleDeleteAllTask = useCallback(() => {
        dispatch(clearTasks());
    }, [dispatch, clearTasks]);

    return (
        <>
            <div className={styles.createWrapper}>
                <Input onChange={handleChangeTask} value={task} placeholder='Введите задачу' />
                <Button onClick={handleButtonClick}>Добавить</Button>
            </div>
            <List list={tasks} onChange={handleChange} onDelete={handleDelete} onDeleteAllTasks={handleDeleteAllTask} />
        </>
    );

};