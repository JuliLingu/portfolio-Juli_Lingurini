import './Hero.css';

export default function Hero({ t, lang }: any) {
    const cvFile = lang === 'es' ? '/cv-es.pdf' : '/cv-en.pdf';
    return (
        <header id="inicio" className="section">
            <h1 className="hero-header">{lang === 'es' ? 'Hola, soy Julián.' : "Hi, I'm Julián."}</h1>
            <h2 className="hero-role">{t.hero.role}</h2>
            <p className="hero-desc">{t.hero.desc}</p>
            <div className="btn-group">
                <a href={cvFile} download className="cv-btn">📄 {t.cv}</a>
                <a href="#contacto" className="cv-btn primary-btn">{t.nav.contact}</a>
            </div>
        </header>
    );
}