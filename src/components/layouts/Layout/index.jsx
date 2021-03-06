import React from 'react';
import { Header, Footer } from '../../organisms';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
