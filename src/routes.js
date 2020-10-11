import React from 'react';
import { Navigate } from 'react-router-dom';
import  LoginView  from "./views/auth/LoginView";
import ReportView from './views/reports/ReportView';
import NotFoundView from './views/errors/NotFoundView';
import DashBoardView from './views/dashboard/DashBoardView';
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout'


const routes = [
  {
    path: 'app',
    element: <MainLayout />,
    children: [
      { path: 'dashboard', element: <DashBoardView /> },
      { path: 'reports', element: <ReportView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element:<LoginLayout/>,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
