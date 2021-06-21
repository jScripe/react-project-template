import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Button.scss';

export interface IButtonProps {
  onClick?: (value?: any) => void;
  disabled?: boolean;
  size?: 'small' | 'normal' | 'large';
}

export const Button: FunctionComponent<IButtonProps> = ({ children, onClick, disabled, size = 'normal' }) => {
  return (
    <div className={styles.content}>
      <button className={cn(styles.button, styles[size])} onClick={disabled ? undefined : onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};
