import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

type Props = {
 children?: React.ReactNode
}

const AppRouterProvider = ({children}: Props) => {
  return (
    <BrowserRouter>
      {children}
      <Router />
    </BrowserRouter>
  )
}

export default AppRouterProvider;
