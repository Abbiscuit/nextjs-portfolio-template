import Navbar from '../navbar/navbar.component';

import './layout.styles.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    {children}
  </div>
);

export default Layout;
