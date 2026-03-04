import './Navbar.css';

export default function Navbar({ t, toggleLanguage }: any) {
    return (
        <nav className="navbar">
            <div className="nav-brand">Julián Lingurini</div>
            <div className="nav-links">
                <a href="#inicio">{t.nav.home}</a>
                <a href="#sobre-mi">{t.nav.about}</a>
                <a href="#proyectos">{t.nav.projects}</a>
                <a href="#contacto">{t.nav.contact}</a>
            </div>
            <button className="lang-btn" onClick={toggleLanguage}>{t.langToggle}</button>
        </nav>
    );
}