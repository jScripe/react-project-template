import { Button } from '@/components';
import { Task } from '@/pages/Main/actions';
import React, { useCallback } from 'react';

import styles from './ListItem.scss';

interface ListItemProps {
    task: Task;
    onChange(id: number): void;
    onDelete(id: number): void;
}

export const ListItem = ({ task: { id, isCompleted, value }, onDelete, onChange }: ListItemProps) => {

    const handleChange = useCallback((id) => () => onChange(id), [onChange]);
    const handleClick = useCallback((id) => () => onDelete(id), [onDelete]);

    return (
        <div className={styles.listItemWrapper}>
            <input type="checkbox" name="checkbox" id={String(id)} checked={isCompleted} onChange={handleChange(id)} />
            <label htmlFor={String(id)}>{value}</label>
            <Button onClick={handleClick(id)} size="small">Удалить</Button>
        </div>
    );
}