import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Tabs.scss';

export const Tabs: FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <Link to={'/main'} className={styles.tab}>
        <div>Главная</div>
      </Link>
      <Link to={'/сompleted-tasks'} className={styles.tab}>
        <div>Выполненные задачи</div>
      </Link>
    </div>
  );
};