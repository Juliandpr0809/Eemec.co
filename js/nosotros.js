// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar menú móvil drawer
    initMobileMenuDrawer();

    // Llamar a handleImages() sólo si está definida para evitar errores
    if (typeof handleImages === 'function') {
        try {
            handleImages();
        } catch (err) {
            console.error('Error ejecutando handleImages():', err);
        }
    } else {
        // No es crítico; se registra para debugging
        console.warn('handleImages no está definida en este contexto.');
    }
});

// ========== MOBILE MENU (Drawer) TOGGLE ==========
function initMobileMenuDrawer() {
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
}

// Función global para debugging
window.debugPage = function() {
    console.log('=== DEBUG SICMECI ===');
    console.log('Scroll indicator:', document.querySelector('.scroll-indicator'));
    console.log('Contact form:', document.getElementById('contactForm'));
    console.log('Mobile menu btn:', document.querySelector('.mobile-menu-btn'));
};