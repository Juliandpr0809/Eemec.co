// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== SMOOTH SCROLLING ==========
    // Navegación suave para todos los enlaces con href="#"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Validar que no sea solo "#"
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Si el formulario usa FormSubmit, no interceptar el envío
        if (contactForm.hasAttribute('data-use-formsubmit')) {
            // Permitir que FormSubmit maneje el envío naturalmente
            console.log('Formulario configurado para usar FormSubmit');
        } else {
            // Solo interceptar si NO usa FormSubmit
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Obtener valores del formulario
                const formData = new FormData(contactForm);
                const nombre = contactForm.querySelector('input[name="nombre"]').value;
                const email = contactForm.querySelector('input[name="correo"]').value;
                
                // Validación básica
                if (!nombre || !email) {
                    alert('Por favor completa los campos obligatorios.');
                    return;
                }
                
                // Validar formato de email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Por favor ingresa un correo electrónico válido.');
                    return;
                }
                
                // Simular envío exitoso
                alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            });
        }
    }

    // ========== HEADER SCROLL EFFECT ==========
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Cambiar sombra del header al hacer scroll
            if (currentScroll > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // ========== MOBILE MENU (Drawer) TOGGLE ==========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');

    if (mobileMenuBtn && nav) {
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

        // Cerrar al hacer click fuera (no estrictamente necesario por el overlay pero sirve por seguridad)
        document.addEventListener('click', (e) => {
            if (isOpen() && !nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMenu();
            }
        });

        // Cerrar al hacer click en cualquiera de los enlaces del nav
        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => closeMenu());
        });
    }

    // ========== ANIMATE ON SCROLL ==========
    const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // NO aplicar animación al hero
            if (!entry.target.classList.contains('hero-section')) {
                entry.target.classList.add('fade-in-up');
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar secciones para animación (excepto hero)
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

    // ========== BUTTON CLICK EFFECTS ==========
    // Agregar efectos de click a todos los botones principales
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Si el botón es de "Solicitar cotización", mostrar modal o formulario
            if (this.textContent.includes('Solicitar cotización')) {
                // Scroll al formulario de contacto
                const contactSection = document.getElementById('contacto');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ========== CONSOLE LOG DE BIENVENIDA ==========
    console.log('%c¡Bienvenido a EEMEC!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cCompromiso y Calidad en Ingeniería', 'color: #64748b; font-size: 14px;');

});