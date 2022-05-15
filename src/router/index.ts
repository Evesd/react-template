import { BrowserHistory } from 'history';
import { useLayoutEffect, useState } from 'react';
import { BrowserRouterProps, Router } from 'react-router-dom';

type RouterProps = BrowserRouterProps & {
  history: BrowserHistory;
};

export default function CustomRouter({ history, ...props }: RouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);
  const element = Router({
    location: state.location,
    navigationType: state.action,
    navigator: history,
    ...props
  });
  return element;
}
