// ============================================
// MANEJADOR DE FORMULARIOS – EmailJS con fallback
// ============================================
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') return fn();
    document.addEventListener('DOMContentLoaded', fn);
  }

  function isConfigReady(cfg) {
    if (!cfg) return false;
    const placeholders = ['TU_PUBLIC_KEY_AQUI', 'TU_SERVICE_ID_AQUI', 'TU_TEMPLATE_ID_AQUI'];
    return (
      typeof cfg.PUBLIC_KEY === 'string' &&
      typeof cfg.SERVICE_ID === 'string' &&
      typeof cfg.TEMPLATE_ID === 'string' &&
      !placeholders.includes(cfg.PUBLIC_KEY) &&
      !placeholders.includes(cfg.SERVICE_ID) &&
      !placeholders.includes(cfg.TEMPLATE_ID)
    );
  }

  function getThanksUrl(form) {
    // Usa _next si existe, si no construye la ruta local
    const nextInput = form.querySelector('input[name="_next"]');
    if (nextInput && nextInput.value) return nextInput.value;
    const inPages = /\/pages\//.test(location.pathname);
    return inPages ? 'gracias.html' : 'pages/gracias.html';
  }

  function setSubmitting(form, submitting) {
    const btn = form.querySelector('button[type="submit"], input[type="submit"]');
    if (!btn) return;
    if (submitting) {
      btn.dataset._originalText = btn.dataset._originalText || btn.innerHTML || btn.value;
      const isButton = btn.tagName === 'BUTTON';
      if (isButton) btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando…';
      else btn.value = 'Enviando…';
      btn.disabled = true;
    } else {
      const original = btn.dataset._originalText;
      if (original) {
        if (btn.tagName === 'BUTTON') btn.innerHTML = original;
        else btn.value = original;
      }
      btn.disabled = false;
    }
  }

  function collectParams(form) {
    const get = (name) => (form.querySelector(`[name="${name}"]`) || {}).value || '';
    return {
      from_name: get('nombre') || get('name') || get('from_name'),
      from_email: get('correo') || get('email') || get('from_email'),
      reply_to: get('correo') || get('email') || get('from_email'),
      phone: get('telefono') || get('phone'),
      service: get('servicio') || get('service'),
      message: get('mensaje') || get('message'),
      to_email: 'gerencia@eemec.co',
      to_name: 'Gerencia EEMEC',
      source_page: location.pathname,
      subject: (form.querySelector('input[name="_subject"]') || {}).value || 'Nueva solicitud desde el sitio web'
    };
  }

  ready(function () {
    const forms = Array.from(document.querySelectorAll('form#contactForm'));
    if (!forms.length) return;

    const canUseEmailJS = typeof window.emailjs !== 'undefined' && isConfigReady(window.EMAILJS_CONFIG);

    forms.forEach((form) => {
      form.addEventListener('submit', function (e) {
        // Siempre prevenimos el submit. Si hay fallback, lo haremos manualmente.
        e.preventDefault();

        const allowFallback = form.hasAttribute('data-use-formsubmit');
        const thanksUrl = getThanksUrl(form);

        if (!canUseEmailJS) {
          // Fallback inmediato
          if (allowFallback) {
            form.submit();
            return;
          }
          alert('No se pudo enviar el mensaje en este momento. Inténtalo más tarde.');
          return;
        }

        const params = collectParams(form);

        // Validaciones básicas
        if (!params.from_name || !params.from_email || !params.message) {
          alert('Por favor completa los campos obligatorios: nombre, correo y mensaje.');
          return;
        }

        try {
          setSubmitting(form, true);
          const { SERVICE_ID, TEMPLATE_ID } = window.EMAILJS_CONFIG;
          window.emailjs
            .send(SERVICE_ID, TEMPLATE_ID, params)
            .then(function () {
              try { form.reset(); } catch (_) {}
              // Redirección controlada
              window.location.href = thanksUrl;
            })
            .catch(function (err) {
              console.error('EmailJS error:', err);
              if (allowFallback) {
                // Intento de fallback al backend de FormSubmit
                setSubmitting(form, false);
                form.submit();
              } else {
                setSubmitting(form, false);
                alert('No se pudo enviar el mensaje. Por favor intenta nuevamente.');
              }
            });
        } catch (err) {
          console.error('Error general al enviar:', err);
          if (allowFallback) {
            setSubmitting(form, false);
            form.submit();
          } else {
            setSubmitting(form, false);
            alert('Ocurrió un error inesperado. Por favor intenta nuevamente.');
          }
        }
      });
    });
  });
})();
