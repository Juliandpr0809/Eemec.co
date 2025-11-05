// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('EEMEC Servicios - JavaScript cargado correctamente');

    // FAQ Accordion
    function initFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const toggle = question.querySelector('.faq-toggle');
                
                // Cerrar otros FAQs abiertos
                document.querySelectorAll('.faq-answer').forEach(item => {
                    if (item !== answer && (item.classList.contains('active') || !item.classList.contains('hidden'))) {
                        item.classList.remove('active');
                        item.classList.add('hidden');
                        if (item.previousElementSibling) {
                            item.previousElementSibling.classList.remove('active');
                            const otherToggle = item.previousElementSibling.querySelector('.faq-toggle');
                            if (otherToggle) otherToggle.textContent = '+';
                        }
                    }
                });
                
                // Alternar FAQ actual
                const willOpen = !answer.classList.contains('active') || answer.classList.contains('hidden');
                answer.classList.toggle('active');
                answer.classList.toggle('hidden', !willOpen);
                question.classList.toggle('active');
                if (toggle) toggle.textContent = willOpen ? '−' : '+';
            });
        });
    }

    // Botones de servicio
    function initServiceButtons() {
        const serviceButtons = document.querySelectorAll('.service-btn');
        
        serviceButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover clase active de todos los botones
                serviceButtons.forEach(b => b.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                btn.classList.add('active');
                
                // Aquí puedes agregar lógica para cambiar el contenido según el servicio seleccionado
                console.log('Servicio seleccionado:', btn.textContent);
            });
        });
    }

    // Manejo del formulario de contacto
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                // Si está configurado para FormSubmit, permitir el submit nativo
                if (contactForm.hasAttribute('data-use-formsubmit')) {
                    return;
                }
                e.preventDefault();
                
                // Validación básica
                const requiredFields = contactForm.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.style.borderColor = '#ff4444';
                    } else {
                        field.style.borderColor = '';
                    }
                });
                
                if (isValid) {
                    // Simular envío del formulario
                    const submitBtn = contactForm.querySelector('.submit-btn');
                    const originalText = submitBtn.innerHTML;
                    
                    submitBtn.innerHTML = 'Enviando...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
                        contactForm.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                } else {
                    alert('Por favor, completa todos los campos obligatorios.');
                }
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

    // Botones de acción
    function initActionButtons() {
        // Botón de agendar reunión
        const scheduleBtn = document.querySelector('.btn-outline');
        if (scheduleBtn) {
            scheduleBtn.addEventListener('click', () => {
                alert('Próximamente podrás agendar una reunión con nosotros.');
            });
        }
        
        // Botón de ayuda rápida
        const helpBtn = document.querySelector('.btn-primary');
        if (helpBtn) {
            helpBtn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.contact-section').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        }
    }

    // Efectos de hover mejorados
    function initHoverEffects() {
        const valueCards = document.querySelectorAll('.value-card');
        
        valueCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Menú móvil unificado
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
            link.addEventListener('click', () => closeMenu());
        });
    }

    // Inicializar todas las funciones
    function init() {
        initMobileMenu();
        initFAQ();
        initServiceButtons();
        initContactForm();
        initSmoothScroll();
        initActionButtons();
        initHoverEffects();
        
        console.log('Todas las funciones de EEMEC Servicios inicializadas correctamente');
    }

    // Ejecutar inicialización
    init();
});

// Función global para debugging
window.sicmeciDebug = function() {
    console.log('=== SICMECI DEBUG INFO ===');
    console.log('FAQ Items:', document.querySelectorAll('.faq-item').length);
    console.log('Service Buttons:', document.querySelectorAll('.service-btn').length);
    console.log('Contact Form:', document.getElementById('contactForm') ? 'Presente' : 'No encontrado');
    console.log('Value Cards:', document.querySelectorAll('.value-card').length);
};