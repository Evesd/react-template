import React from 'react';
import logo from '../logo.svg';
import { useAppSelector, useAppDispatch } from '../hooks/store';
import { changeName } from '../action/component';
import { Button } from 'antd';
import style from './home.module.scss';
import Text from '@/components/Text';

function App() {
  const name = useAppSelector((state) => state.component.name);
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(changeName('what'));
  };

  return (
    <div className="App">
      <header className="App-header">
        {name}
        <Text />
        <Button type="primary" onClick={clickHandler}>
          Click me
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p className={style.red}>
          Edit fdsfs <code className={style.hello}>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
