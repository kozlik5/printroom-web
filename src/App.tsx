import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import SluzbyPage from './pages/SluzbyPage';
import PortfolioPage from './pages/PortfolioPage';
import KontaktPage from './pages/KontaktPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sluzby" element={<SluzbyPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
