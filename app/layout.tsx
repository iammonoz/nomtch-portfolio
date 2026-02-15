import Footer from '../Footer';
// Main layout component
const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
