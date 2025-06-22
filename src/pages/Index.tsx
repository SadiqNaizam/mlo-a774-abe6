import React from 'react';
import LoginCard from '../components/Login/LoginCard';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * The main index page of the application, which serves as the login view.
 * It utilizes a centered layout to display the login card.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
