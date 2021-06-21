import React from 'react';

import styles from './AppHeaderView.scss';

import { Logo, Tabs } from '@/components';

export const AppHeaderView = () => {

    return (
        <div className={styles.content}>
            <div className={styles.headerContent}>
                <Logo />
            </div>
            <div className={styles.tabsContent}>
                <Tabs />
            </div>
    </div>
    );
};