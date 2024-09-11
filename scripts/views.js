// Traducciones generales para todos los elementos
const translations = {
    en: {
        home: 'Home',
        projectsTitle: 'Projects',
        projects:'Projects',
        textAnalyzer: 'Text Analyzer',
        dataverseChat: 'Dataverse Chat',
        skillsTitle: 'Skills',
        skills:'Skills',
        contact: 'Contact: mbguzman.099@gmail.com'    
    },
    es: {
        home: 'Inicio',
        projectsTitle: 'Proyectos',
        projects:'Proyectos',
        textAnalyzer: 'Analizador de Texto',
        dataverseChat: 'Dataverse Chat',
        skillsTitle: 'Habilidades',
        skills: 'Habilidades',
        contact: 'Contacto: mbguzman.099@gmail.com'
    }
};

// Función para aplicar traducciones
function setLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Para el título de la página
    const titleElement = document.querySelector('title');
    if (titleElement) {
        const pageTitleKey = titleElement.getAttribute('data-translate');
        if (translations[language][pageTitleKey]) {
            titleElement.textContent = translations[language][pageTitleKey];
        }
    
    }

    localStorage.setItem('language', language);
}

// Inicializar el idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en'; // Idioma por defecto
    document.getElementById('language-select').value = savedLanguage;
    setLanguage(savedLanguage);
});

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}
