
const translations = {
    en: {
        home: 'Home',
        projects: 'Projects',
        skills: 'Skills',
        about: "I'm a Fullstack Developer specializing in HTML, CSS, and JavaScript, with a background in Educommunication, art, and culture. I'm passionate about creating and optimizing interactive websites by merging technology with my expertise in graphic design and social media. Ensuring that the user experience is intuitive and functional is my priority. I'm quick to adapt and effective working in collaborative spaces. My constant commitment to learning and professional development motivates me to create innovative and creative solutions for the technology world",
        contact: 'Contact: mbguzman.099@gmail.com',
    },
    es: {
        home: 'Inicio',
        projects: 'Proyectos',
        skills: 'Habilidades',
        about: 'Soy una Desarrolladora Fullstack con especialización en HTML, CSS y JavaScript, tengo una formación previa en Educomunicación, arte y cultura. Me apasiona crear y optimizar sitios web interactivos combinando la tecnología con mi experiencia en artes gráficas y redes sociales. Garantizar que la experiencia del usuario sea intuitiva y funcional es mi prioridad. Me adapto rápidamente y soy eficaz trabajando en espacios colaborativos. Mi compromiso constante con el aprendizaje y el desarrollo profesional me motiva a crear soluciones innovadoras y creativas para el mundo de la tecnología.',
        contact: 'Contacto: mbguzman.099@gmail.com',
    }
};

function setLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key] || element.textContent;
    });

    localStorage.setItem('language', language);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en'; // Default to English
    document.getElementById('language-select').value = savedLanguage;
    setLanguage(savedLanguage);
});

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}
