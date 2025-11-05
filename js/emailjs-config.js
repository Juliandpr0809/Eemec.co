// ============================================
// CONFIGURACIÓN EMAILJS
// ============================================
// INSTRUCCIONES:
// 1. Ve a https://dashboard.emailjs.com/sign-up y crea tu cuenta
// 2. Conecta la cuenta de envío (puede ser Gmail)
// 3. Crea un template de email y define el destinatario en el campo "To"
//    Preferiblemente fija el "To" a gerencia@eemec.co o usa la variable {{to_email}}
// 4. Reemplaza los valores XXXXX abajo con tus IDs reales:

const EMAILJS_CONFIG = {
    // 🔑 Tu Public Key (Account → General)
    PUBLIC_KEY: '4KJ3sLX3EKCnxdcDx',
    
    // ✉️ Tu Service ID (Email Services)
    SERVICE_ID: 'service_2dja2he',
    
    // 📄 Tu Template ID (Email Templates)
    TEMPLATE_ID: 'template_brw18mr'
};

// ============================================
// NO MODIFICAR DEBAJO DE ESTA LÍNEA
// ============================================

// Inicializar EmailJS cuando se cargue la página
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('✅ EmailJS inicializado correctamente');
    } else {
        console.error('❌ EmailJS no está cargado. Verifica que el script esté incluido.');
    }
})();

// Exportar configuración para uso global
window.EMAILJS_CONFIG = EMAILJS_CONFIG;
