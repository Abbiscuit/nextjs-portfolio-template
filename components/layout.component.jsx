import Navbar from './navbar/navbar.component';

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    {children}
  </div>
);

export default Layout;
