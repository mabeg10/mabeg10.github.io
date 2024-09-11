// main.js

const translations = {
    en: {
        home: 'Home',
        projects: 'Projects',
        skills: 'Skills',
        about: "I'm Fullstack Developer specializing in HTML, CSS, and JavaScript, with a background in Educommunication, art, and culture. I'm passionate about creating and optimizing interactive websites by merging technology with my expertise in graphic design and social media. My top priority is to ensure that the user experience is both intuitive and functional. I adapt swiftly and excel in collaborative settings. My continuous commitment to learning and professional growth drives me to develop innovative and creative solutions for the tech industry."
    },
    es: {
        home: 'Inicio',
        projects: 'Proyectos',
        skills: 'Habilidades',
        about: 'Soy una Desarrolladora Fullstack con especialización en HTML, CSS y JavaScript, tengo una formación previa en Educomunicación, arte y cultura. Me apasiona crear y optimizar sitios web interactivos combinando la tecnología con mi experiencia en artes gráficas y redes sociales. Garantizar que la experiencia del usuario sea intuitiva y funcional es mi prioridad. Me adapto rápidamente y soy eficaz trabajando en espacios colaborativos. Mi compromiso constante con el aprendizaje y el desarrollo profesional me motiva a crear soluciones innovadoras y creativas para el mundo de la tecnología.'
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
