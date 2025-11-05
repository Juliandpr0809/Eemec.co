// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('EEMEC Contacto - JavaScript cargado correctamente');

    // Inicializar todas las funciones
    initMobileMenu();
    initContactForm();
    initSmoothScroll();
    initButtonInteractions();
    
    console.log('Todas las funciones de contacto inicializadas correctamente');
});

// Menú móvil
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');

    if (!mobileMenuBtn || !nav) return;

    // Crear overlay dinámicamente (si no existe) y retornarlo
    function ensureOverlay() {
        let ov = document.getElementById('mobileOverlay');
        if (!ov) {
            ov = document.createElement('div');
            ov.id = 'mobileOverlay';
            document.body.appendChild(ov);
            ov.addEventListener('click', closeMenu);
        }
        return ov;
    }

    function openMenu() {
        // mostrar drawer
        nav.classList.remove('hidden');
        nav.classList.add('open');
        document.body.classList.add('menu-open');
        const ov = ensureOverlay();
        // permitir transición antes de habilitar clic
        setTimeout(() => ov.classList.add('show'), 10);
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        // ocultar drawer
        nav.classList.remove('open');
        document.body.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const ov = document.getElementById('mobileOverlay');
        if (ov) {
            ov.classList.remove('show');
            // quitar del DOM después de la transición
            setTimeout(() => { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 220);
        }
        // dejar nav con hidden después de la transición
        setTimeout(() => nav.classList.add('hidden'), 300);
    }

    function isOpen() {
        return nav.classList.contains('open');
    }

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen() ? closeMenu() : openMenu();
    });

    document.addEventListener('click', (e) => {
        if (isOpen() && !nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeMenu();
        }
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
}

// Manejo del formulario de contacto
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Si el formulario está configurado para FormSubmit, no interceptar
            if (this.hasAttribute('data-use-formsubmit')) {
                return; // Dejar que el navegador haga el POST
            }
            
            // Validación básica
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#ff8207'; // color de acento marca
            } else {
                field.style.borderColor = '';
            }
        });
            
            if (isValid) {
                // Simular envío del formulario
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            } else {
                alert('Por favor, completa todos los campos obligatorios.');
            }
        });
        
        // Limpiar estilos de error al escribir
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '';
                }
            });
        });
    }
}

// Scroll suave para enlaces internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Interacciones de botones
function initButtonInteractions() {
    // Botón de ayuda
    const helpBtn = document.querySelector('.help-btn');
    if (helpBtn) {
        helpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.contact-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    // Enlace "Cómo llegar"
    const directionsLinks = document.querySelectorAll('.directions-link, .footer-section a[href="#"]');
    directionsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.map-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
}

// Función global para debugging
window.sicmeciDebug = function() {
    console.log('=== EEMEC CONTACTO DEBUG INFO ===');
    console.log('Mobile Menu:', document.getElementById('mobileMenuBtn') ? 'Presente' : 'No encontrado');
    console.log('Main Nav:', document.getElementById('mainNav') ? 'Presente' : 'No encontrado');
    console.log('Contact Form:', document.getElementById('contactForm') ? 'Presente' : 'No encontrado');
    console.log('Map Section:', document.querySelector('.map-section') ? 'Presente' : 'No encontrado');
};

// Función para manejar cambios de idioma (placeholder)
function changeLanguage(lang) {
    console.log('Cambiando idioma a:', lang);
    // Aquí puedes implementar la lógica de internacionalización
    alert(`Idioma cambiado a: ${lang}`);
}