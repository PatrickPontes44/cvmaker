import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import EditorPage from './components/EditorPage';
import TemplatesPage from './components/TemplatesPage';
import { CVProvider } from './context/CVContext';
import CookieConsent from './components/CookieConsent';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CVProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/templates" element={<TemplatesPage />} />
              <Route path="/editor" element={<EditorPage />} />
            </Routes>
          </Layout>
          <CookieConsent />
        </CVProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
