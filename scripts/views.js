// Traducciones generales para todos los elementos
const translations = {
    en: {
        home: 'Home',
        projectsTitle: 'Projects',
        projects:'Projects',
        textAnalyzer: 'Text Analyzer',
        dataverseChat: 'Dataverse Chat',
        skillsTitle: 'Skills',
        description: 'Description: An e-commerce website built for small businesses to sell products online. The website features a user-friendly interface, shopping cart functionality, and secure payment processing.',
        technologiesUsed: 'Technologies Used: HTML, CSS, JavaScript',
        liveProject: 'Live Project',
        githubRepository: 'GitHub Repository',
        screenshotDescription: 'Screenshot Gilmore Girls Serie',
        contact: 'Contact: mbguzman.099@gmail.com'    
    },
    es: {
        home: 'Inicio',
        projectsTitle: 'Proyectos',
        projects:'Proyectos',
        textAnalyzer: 'Analizador de Texto',
        dataverseChat: 'Dataverse Chat',
        skillsTitle: 'Habilidades',
        description: 'Descripción: Aplicación web de análisis de texto que proporciona métricas detalladas sobre la estructura y el contenido de un texto. La herramienta permite ingresar un texto y ofrece en tiempo real datos como el recuento de palabras, caracteres, la suma total de números, y la longitud media de las palabras.',
        technologiesUsed: 'Tecnologías usadas: HTML, CSS, JavaScript',
        liveProject: 'Página del Proyecto',
        githubRepository: 'Repositorio en GitHub',
        screenshotDescription: 'Captura de Pantalla Analizador de Texto',
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
