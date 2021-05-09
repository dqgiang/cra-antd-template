/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../../components/Layout/Layout.component';

const ROUTES = {
  path: '/',
  routes: [
    {
      path: 'app-1',
      name: 'App 1',
      routes: [
        {
          path: '',
          name: 'Overview',
          icon: null,
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          icon: null,
        },
      ],
    },
    {
      path: '#',
      name: 'App-2',
    },
  ],
};

const Dashboard: React.FC = ({ children, ...rest }) => {
  return (
    <Layout route={ROUTES} {...rest}>
      {children}
    </Layout>
  );
};

export default Dashboard;
