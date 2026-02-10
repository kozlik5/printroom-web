import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTopButton from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import HomePageDark from './pages/HomePageDark';
import SluzbyPage from './pages/SluzbyPage';
import PortfolioPage from './pages/PortfolioPage';
import KontaktPage from './pages/KontaktPage';
import GdprPage from './pages/GdprPage';
import VopPage from './pages/VopPage';
import PotlacTextiluPage from './pages/services/PotlacTextiluPage';
import ReklamnePredmetyPage from './pages/services/ReklamnePredmetyPage';
import ThreeDSluzbyPage from './pages/services/ThreeDSluzbyPage';
import TlacPolygrafiaPage from './pages/services/TlacPolygrafiaPage';
import BanneryVelkoformatPage from './pages/services/BanneryVelkoformatPage';
import PolepyPage from './pages/services/PolepyPage';
import VysivaniePage from './pages/services/VysivaniePage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dark" element={<HomePageDark />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f1129] text-slate-900 dark:text-white transition-colors duration-300">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/sluzby" element={<SluzbyPage />} />
                  <Route path="/sluzby/potlac-textilu" element={<PotlacTextiluPage />} />
                  <Route path="/sluzby/reklamne-predmety" element={<ReklamnePredmetyPage />} />
                  <Route path="/sluzby/3d-sluzby" element={<ThreeDSluzbyPage />} />
                  <Route path="/sluzby/tlac-polygrafia" element={<TlacPolygrafiaPage />} />
                  <Route path="/sluzby/bannery-velkoformat" element={<BanneryVelkoformatPage />} />
                  <Route path="/sluzby/polepy" element={<PolepyPage />} />
                  <Route path="/sluzby/vysivanie" element={<VysivaniePage />} />
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
      <ScrollToTopButton />
      <CookieConsent />
    </>
  );
}
