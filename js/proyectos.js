// Proyectos.js - Funcionalidad para la página de proyectos

// Datos de las galerías de cada proyecto
const galeriasProyectos = {
    'cotecmar-bateria': {
        titulo: 'Batería y Sistema de Alarmas - COTECMAR',
        imagenes: [
            '../img/Servicio cotecmar/batería y sistema de alarmas/Imagen de WhatsApp 2025-10-21 a las 19.40.43_c5a620f3.jpg',
            '../img/Servicio cotecmar/batería y sistema de alarmas/Imagen de WhatsApp 2025-10-21 a las 19.40.58_2a878aa5.jpg'
        ]
    },
    'cotecmar-consola': {
        titulo: 'Conexión de Consola - COTECMAR',
        imagenes: [
            '../img/Servicio cotecmar/conexión de consola/IMG-20251022-WA0004.jpg',
            '../img/Servicio cotecmar/conexión de consola/IMG-20251022-WA0005.jpg',
            '../img/Servicio cotecmar/conexión de consola/IMG-20251022-WA0006.jpg',
            '../img/Servicio cotecmar/conexión de consola/IMG-20251022-WA0007.jpg',
            '../img/Servicio cotecmar/conexión de consola/IMG-20251022-WA0008.jpg'
        ]
    },
    'cotecmar-sistema': {
        titulo: 'Sistema Eléctrico y Electrónico - COTECMAR',
        imagenes: [
            '../img/Servicio cotecmar/sistema eléctrico y electrónico/IMG-20251022-WA0044.jpg',
            '../img/Servicio cotecmar/sistema eléctrico y electrónico/IMG-20251022-WA0045.jpg',
            '../img/Servicio cotecmar/sistema eléctrico y electrónico/IMG-20251022-WA0046.jpg',
            '../img/Servicio cotecmar/sistema eléctrico y electrónico/IMG-20251022-WA0047.jpg',
            '../img/Servicio cotecmar/sistema eléctrico y electrónico/IMG-20251022-WA0048.jpg',
            '../img/Servicio cotecmar/sistema eléctrico y electrónico/IMG-20251022-WA0049.jpg',
            '../img/Servicio cotecmar/sistema eléctrico y electrónico/IMG-20251022-WA0050.jpg',
            '../img/Servicio cotecmar/sistema eléctrico y electrónico/IMG-20251022-WA0051.jpg'
        ]
    },
    'aire-condensadora': {
        titulo: 'Cambio de Condensadora - Embarcación Particular',
        imagenes: [
            '../img/servicio3/Cambio de condensadora planta aire acondicionado en embarcaciones particulares/IMG-20251022-WA0087.jpg',
            '../img/servicio3/Cambio de condensadora planta aire acondicionado en embarcaciones particulares/IMG-20251022-WA0088.jpg',
            '../img/servicio3/Cambio de condensadora planta aire acondicionado en embarcaciones particulares/IMG-20251022-WA0089.jpg',
            '../img/servicio3/Cambio de condensadora planta aire acondicionado en embarcaciones particulares/IMG-20251022-WA0090.jpg',
            '../img/servicio3/Cambio de condensadora planta aire acondicionado en embarcaciones particulares/IMG-20251022-WA0091.jpg',
            '../img/servicio3/Cambio de condensadora planta aire acondicionado en embarcaciones particulares/IMG-20251022-WA0092.jpg',
            '../img/servicio3/Cambio de condensadora planta aire acondicionado en embarcaciones particulares/IMG-20251022-WA0093.jpg',
            '../img/servicio3/Cambio de condensadora planta aire acondicionado en embarcaciones particulares/IMG-20251022-WA0094.jpg'
        ]
    },
    'motores-armada': {
        titulo: 'Mantenimiento de Motores Eléctricos - Armada Nacional',
        imagenes: [
            '../img/servicio5/mantenimiento de motores electrico a unidades armada nacional/Imagen de WhatsApp 2025-10-21 a las 20.11.57_334f91bb.jpg',
            '../img/servicio5/mantenimiento de motores electrico a unidades armada nacional/Imagen de WhatsApp 2025-10-21 a las 20.11.58_0c510a43.jpg'
        ]
    },
    'motores-ca': {
        titulo: 'Mantenimiento de Motores Eléctricos Corriente Alterna',
        imagenes: [
            '../img/servicio5/mantenimiento de motores electricos corriente alterna/Imagen de WhatsApp 2025-10-21 a las 19.51.14_a42718b7.jpg',
            '../img/servicio5/mantenimiento de motores electricos corriente alterna/Imagen de WhatsApp 2025-10-21 a las 19.51.14_d5299351.jpg',
            '../img/servicio5/mantenimiento de motores electricos corriente alterna/Imagen de WhatsApp 2025-10-21 a las 19.51.14_df079cf7.jpg'
        ]
    },
    'tableros-embarcaciones': {
        titulo: 'Fabricación de Tableros de Distribución para Embarcaciones',
        imagenes: [
            '../img/servicio6/fabricacion de tableros de distribucion para embarcaciones/IMG-20251022-WA0052.jpg',
            '../img/servicio6/fabricacion de tableros de distribucion para embarcaciones/IMG-20251022-WA0053.jpg'
        ]
    },
    'tableros-portatiles': {
        titulo: 'Fabricación de Tableros Eléctricos Portátiles',
        imagenes: [
            '../img/servicio6/fabricacion de tableros electricos portatiles/Imagen de WhatsApp 2025-10-21 a las 19.41.59_062a6c66.jpg',
            '../img/servicio6/fabricacion de tableros electricos portatiles/Imagen de WhatsApp 2025-10-21 a las 19.41.59_0b9c0469.jpg'
        ]
    },
    'generador-500kw': {
        titulo: 'Mantenimiento de Generador 500kW Corriente Alterna',
        imagenes: [
            '../img/servicio6/Mantenimiento generador de 500kw corriente alterna/Imagen de WhatsApp 2025-10-21 a las 20.37.17_ca06d7b8.jpg',
            '../img/servicio6/Mantenimiento generador de 500kw corriente alterna/Imagen de WhatsApp 2025-10-21 a las 20.37.17_e4d0b369.jpg',
            '../img/servicio6/Mantenimiento generador de 500kw corriente alterna/Imagen de WhatsApp 2025-10-21 a las 20.37.17_e0457587.jpg'
        ]
    },
    'mantenimiento-generadores': {
        titulo: 'Reparación y Mantenimiento de Generadores',
        imagenes: [
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0077.jpg',
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0078.jpg',
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0079.jpg',
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0080.jpg',
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0081.jpg',
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0082.jpg',
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0083.jpg',
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0084.jpg',
            '../img/servicio6/Mantenimiento generadores electricos/IMG-20251022-WA0085.jpg'
        ]
    },
    'rebobinado-generador': {
        titulo: 'Rebobinado de Generador Eléctrico',
        imagenes: [
            '../img/servicio6/Rebobinado de generador electrico/Imagen de WhatsApp 2025-10-21 a las 20.27.17_df207474.jpg'
        ]
    },
    'rebobinado-motor': {
        titulo: 'Rebobinado de Motor Eléctrico',
        imagenes: [
            '../img/servicio6/Rebobinado de motor electrico/Imagen de WhatsApp 2025-10-21 a las 20.46.04_ec66d53a.jpg'
        ]
    },
    'rebobinado-motor-ca': {
        titulo: 'Rebobinado de Motor Eléctrico Corriente Alterna',
        imagenes: [
            '../img/servicio6/rebobinado de motor electrico corriente alterna/Imagen de WhatsApp 2025-10-21 a las 20.45.52_e4b1afb8.jpg',
            '../img/servicio6/rebobinado de motor electrico corriente alterna/Imagen de WhatsApp 2025-10-21 a las 20.45.53_10ac518f.jpg',
            '../img/servicio6/rebobinado de motor electrico corriente alterna/Imagen de WhatsApp 2025-10-21 a las 20.45.53_41e47619.jpg'
        ]
    },
    'rebobinado-gen-2': {
        titulo: 'Rebobinado de Generador',
        imagenes: [
            '../img/servicio6/Rebobinado generador/Imagen de WhatsApp 2025-10-21 a las 20.48.15_9e43ee56.jpg'
        ]
    },
    'rebobinado-gen-7kw': {
        titulo: 'Rebobinado de Generador 7 kW',
        imagenes: [
            '../img/servicio6/Rebobinado generador de 7 kW/Imagen de WhatsApp 2025-10-21 a las 20.38.40_d8687cd0.jpg',
            '../img/servicio6/Rebobinado generador de 7 kW/Imagen de WhatsApp 2025-10-21 a las 20.38.40_ee965a10.jpg'
        ]
    },
    'rebobinado-rotor': {
        titulo: 'Rebobinado Rotor Principal y Auxiliar',
        imagenes: [
            '../img/servicio6/Rebobinado rotor principal y rotor auxiliar generador electrico/Imagen de WhatsApp 2025-10-21 a las 20.32.50_2c0bc3a5.jpg',
            '../img/servicio6/Rebobinado rotor principal y rotor auxiliar generador electrico/Imagen de WhatsApp 2025-10-21 a las 20.32.50_b4fd6e6c.jpg'
        ]
    }
};

// Sistema de filtros
document.addEventListener('DOMContentLoaded', function() {
    // ========== MOBILE MENU (Drawer) TOGGLE - Copiado exactamente de index.js ==========
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

    // Inicialización de filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    const proyectos = document.querySelectorAll('.proyecto-card');

    // Estilo para botones de filtro
    const style = document.createElement('style');
    style.textContent = `
        .filter-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: 2px solid #E5E7EB;
            background: white;
            color: #6B7280;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        .filter-btn:hover {
            border-color: #3B82F6;
            color: #3B82F6;
            transform: translateY(-2px);
        }
        .filter-btn.active {
            background: linear-gradient(to right, #3B82F6, #06B6D4);
            color: white;
            border-color: transparent;
        }
    `;
    document.head.appendChild(style);

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar proyectos
            proyectos.forEach(proyecto => {
                const categories = proyecto.getAttribute('data-category');
                
                if (filter === 'todos' || categories.includes(filter)) {
                    proyecto.style.display = 'block';
                    setTimeout(() => {
                        proyecto.style.opacity = '1';
                        proyecto.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    proyecto.style.opacity = '0';
                    proyecto.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        proyecto.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Funciones para el lightbox - DEBEN ser globales para funcionar con onclick
window.openGallery = function(proyectoId) {
    const proyecto = galeriasProyectos[proyectoId];
    if (!proyecto) {
        console.error('Proyecto no encontrado:', proyectoId);
        return;
    }
    
    // Eliminar lightbox anterior si existe
    let lightboxExistente = document.getElementById('lightbox');
    if (lightboxExistente) {
        lightboxExistente.remove();
    }
    
    // Crear lightbox completamente nuevo
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        display: block !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background-color: rgba(0, 0, 0, 0.95) !important;
        z-index: 9999999 !important;
        overflow-y: auto !important;
        padding: 80px 20px 40px 20px !important;
    `;
    
    // Crear botón de cerrar
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.onclick = closeLightbox;
    closeBtn.style.cssText = `
        position: fixed !important;
        top: 20px !important;
        right: 20px !important;
        width: 50px !important;
        height: 50px !important;
        background-color: #ef4444 !important;
        color: white !important;
        border: none !important;
        border-radius: 50% !important;
        font-size: 28px !important;
        cursor: pointer !important;
        z-index: 99999999 !important;
    `;
    
    // Crear título
    const title = document.createElement('h2');
    title.textContent = proyecto.titulo;
    title.style.cssText = `
        color: white !important;
        text-align: center !important;
        font-size: 24px !important;
        margin: 0 0 30px 0 !important;
    `;
    
    // Crear contenedor de galería
    const gallery = document.createElement('div');
    gallery.style.cssText = `
        max-width: 1200px !important;
        margin: 0 auto !important;
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
        gap: 20px !important;
    `;
    
    // Agregar imágenes
    proyecto.imagenes.forEach((imagen, index) => {
        const img = document.createElement('img');
        img.src = imagen;
        img.alt = `${proyecto.titulo} - Imagen ${index + 1}`;
        img.style.cssText = `
            width: 100% !important;
            height: 300px !important;
            object-fit: cover !important;
            border: 3px solid white !important;
            border-radius: 8px !important;
        `;
        gallery.appendChild(img);
    });
    
    // Ensamblar lightbox
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(title);
    lightbox.appendChild(gallery);
    
    // Agregar al body
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Lightbox creado dinámicamente');
    console.log('✅ Proyecto:', proyectoId);
    console.log('✅ Imágenes:', proyecto.imagenes.length);
}

window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.remove();
    }
    document.body.style.overflow = '';
}

// Cerrar lightbox con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Cerrar lightbox al hacer clic en el fondo oscuro
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            // Solo cerrar si se hace clic en el fondo (no en las imágenes o contenido)
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});
