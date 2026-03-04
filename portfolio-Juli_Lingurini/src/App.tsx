import { useState } from 'react';
import { translations, type Language } from './data/translations';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './index.css';

function App() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  const toggleLanguage = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <>
      <Navbar t={t} toggleLanguage={toggleLanguage} />
      <div className="container">
        <Hero t={t} lang={lang} />
        <About t={t} />
        <Projects t={t} lang={lang} />
        <Contact t={t} />
      </div>
    </>
  );
}

export default App;