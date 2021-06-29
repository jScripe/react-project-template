import React, { ReactNode, FunctionComponent, useCallback, useState } from 'react';
import { AuthView } from './AuthView';

export interface IAuthProps {
  children: ReactNode;
}

export const Auth: FunctionComponent<IAuthProps> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleOnAccept = useCallback(() => {
    if (login === 'admin' && password === 'admin') {
      setAuth(true);
      return;
    }
    alert('Уходи с моей полянки');
  }, [login, password]);

  const handleChangeLogin = useCallback((value: string) => {
    setLogin(value);
  }, []);

  const handleChangePassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  return <>{auth ? children : <AuthView onAccept={handleOnAccept} onChangeLogin={handleChangeLogin} onChangePassword={handleChangePassword} />}</>;
  // return <>{children}</>;
};
