import { Task } from '@/pages/Main/actions';
import React from 'react';
import { ListItem } from './ListItem';

import styles from './List.scss';
import { Button } from '../Button';
import { useCallback } from 'react';

interface IListProps {
    list: Task[];
    onChange(id: number): void;
    onDelete(id: number): void;
    onDeleteAllTasks(): void;
}

export const List = ({ list, onChange, onDelete, onDeleteAllTasks }: IListProps) => {

    const handleDeleteAllTask = useCallback(() => {
        onDeleteAllTasks();
    }, [onDeleteAllTasks]);

    return (
        <div className={styles.listWrapper}>
            {list.map((listItem) => (
                <div key={listItem.id}>
                    <ListItem task={listItem} onChange={onChange} onDelete={onDelete} />
                </div>
            ))}
            <div className={styles.allDeleteButtonWrapper}>
                <Button onClick={handleDeleteAllTask}>Удалить все задачи</Button>
            </div>
        </div>
    )
};