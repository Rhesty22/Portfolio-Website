import Navigation from '../Navigation';
import Footer from '../Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
