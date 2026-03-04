import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss } from 'react-icons/si';
import './About.css';

export default function About({ t }: any) {
    return (
        <section id="sobre-mi" className="section">
            <h3 className="section-title">{t.about.title}</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>{t.about.desc}</p>
            <h4 style={{ marginBottom: '1rem' }}>{t.about.skills}</h4>
            <div className="tech-icons">
                <SiTypescript title="TypeScript" />
                <FaReact title="React" />
                <SiVite title="Vite" />
                <FaNodeJs title="Node.js" />
                <SiTailwindcss title="Tailwind CSS" />
            </div>
        </section>
    );
}