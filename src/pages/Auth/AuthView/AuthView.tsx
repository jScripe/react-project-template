import React, { FunctionComponent } from 'react';

import styles from './AuthView.scss';

import { Modal, Input, Button, Caption } from '@/components';

export interface IAuthViewProps {
  onAccept: () => void;
  onChangeLogin: (value: string) => void;
  onChangePassword: (value: string) => void;
}

export const AuthView: FunctionComponent<IAuthViewProps> = ({ onAccept, onChangeLogin, onChangePassword }) => {
  return (
    <Modal zIndex={100} overlay>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.label}>Авторизация</div>
        </div>
        <div className={styles.main}>
          <div className={styles.inputArea}>
            <Caption className={styles.caption}>Логин</Caption>
            <Input onChange={onChangeLogin} />
          </div>
          <div className={styles.inputArea}>
            <Caption className={styles.caption}>Пароль</Caption>
            <Input onChange={onChangePassword} htmlType="password" isShowEyeCloseUp />
          </div>
        </div>
        <div className={styles.footer}>
          <Button onClick={onAccept}>Войти</Button>
        </div>
      </div>
    </Modal>
  );
};
