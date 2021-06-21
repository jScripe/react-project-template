import React from 'react';
import { useSelector } from 'react-redux';
import { mainSelector } from '../Main/reducer';

export const CompletedTasks = () => {
    const { tasks } = useSelector(mainSelector);

    return (
        <ul>
            {tasks.map((task) => task.isCompleted ? (
                <li key={task.id}>{task.value}</li>
            ) : null)}
        </ul>
    )
}