import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

export default function Contact({ t }: any) {
    return (
        <footer id="contacto" className="section contact-footer">
            <h3 className="contact-title">{t.contact.title}</h3>
            <p className="contact-desc">{t.contact.desc}</p>
            <a href="mailto:tuemail@ejemplo.com" className="contact-btn">
                {t.contact.btn}
            </a>
            <div className="social-links">
                <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
        </footer>
    );
}