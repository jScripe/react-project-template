import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import styles from './App.scss';

import { configureStore } from '@/store/store';
import { AppHeader } from './AppHedaer';
import { Main } from '@/pages/Main';
import { CompletedTasks } from '@/pages/CompletedTasks';
import { Auth } from '@/pages/Auth/Auth';

const store = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Auth>
          <div className={styles.content}>
            <AppHeader />
            <div className={styles.contentCenter}>
              <Switch>
                <Route path="/main" component={Main} />
                <Route path="/сompleted-tasks" component={CompletedTasks} />
                <Redirect from="/" to="/main" />
              </Switch>
            </div>
          </div>
        </Auth>
      </BrowserRouter>
    </Provider>
  );
};