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
import GdprPage from './pages/GdprPage';
import VopPage from './pages/VopPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/sluzby" element={<SluzbyPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/kontakt" element={<KontaktPage />} />
                  <Route path="/gdpr" element={<GdprPage />} />
                  <Route path="/vop" element={<VopPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
      <CookieConsent />
    </>
  );
}
