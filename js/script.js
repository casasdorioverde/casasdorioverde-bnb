document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'en';
  
  function setLang(lang) {
    document.documentElement.lang = lang;
    const trans = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el =&gt; {
      const key = el.dataset.i18n;
      if (trans[key]) {
        el.textContent = trans[key];
      }
    });
    // Update toggle text
    toggleBtn.textContent = lang === 'en' ? 'PT' : 'EN';
  }
  
  toggleBtn.addEventListener('click', function() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', currentLang);
    setLang(currentLang);
  });
  
  setLang(currentLang);
  
  // Booking form handler
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        if (response.ok) {
          alert('Thank you! Your message has been sent.');
          form.reset();
        } else {
          alert('Oops! There was a problem submitting your form');
        }
      } catch (error) {
        alert('Oops! There was a problem submitting your form');
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor =&gt; {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.booking': 'Booking',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'hero.title': 'Welcome to Cheleiros B&amp;B',
    'hero.subtitle': 'Cozy and inviting stays in serene Cheleiros, Mafra, Portugal',
    'hero.cta': 'Book Now',
    'about.title': 'About Us',
    'about.text': 'Nestled in the picturesque village of Cheleiros, our Bed &amp; Breakfast offers a peaceful retreat with comfortable rooms, delicious homemade breakfast, and breathtaking views of the Portuguese countryside. Perfect for couples, families, or solo travelers seeking tranquility.',
    'testimonials.title': 'Guest Testimonials',
    'room1.title': 'Cozy Double',
    'room1.price': '€90/night',
    'room1.desc': 'Queen bed, private bathroom, garden view.',
    'room2.title': 'Deluxe Suite',
    'room2.price': '€140/night',
    'room2.desc': 'King bed, balcony, jacuzzi bath.',
    'room3.title': 'Family Room',
    'room3.price': '€120/night',
    'room3.desc': 'Two queen beds, spacious, family-friendly.',
    'room4.title': 'Single Retreat',
    'room4.price': '€70/night',
    'room4.desc': 'Comfortable single bed, peaceful ambiance.',
    'booking.title': 'Book Your Stay',
    'booking.name': 'Name',
    'booking.email': 'Email',
    'booking.checkin': 'Check-in Date',
    'booking.checkout': 'Check-out Date',
    'booking.guests': 'Number of Guests',
    'booking.message': 'Message',
    'booking.submit': 'Send Booking Request',
    'gallery.title': 'Gallery',
    'contact.title': 'Contact Us',
    'contact.text': 'Get in touch for availability or questions.',
    'contact.address': 'Cheleiros, Mafra, Portugal',
    'contact.phone': 'Phone: +351 123 456 789',
    'contact.email': 'Email: info@cheleirosbb.pt',
    'footer.copyright': '&copy; 2024 Cheleiros B&amp;B. All rights reserved.'
  },
  pt: {
    'nav.home': 'Início',
    'nav.rooms': 'Quartos',
    'nav.booking': 'Reserva',
    'nav.gallery': 'Galeria',
    'nav.contact': 'Contacto',
    'hero.title': 'Bem-vindo ao Cheleiros B&amp;B',
    'hero.subtitle': 'Estadias acolhedoras e convidativas em Cheleiros tranquilo, Mafra, Portugal',
    'hero.cta': 'Reservar Agora',
    'about.title': 'Sobre Nós',
    'about.text': 'Aninhado na pittoresca aldeia de Cheleiros, o nosso Bed &amp; Breakfast oferece um retiro pacífico com quartos confortáveis, pequeno-almoço caseiro delicioso e vistas deslumbrantes do campo português. Perfeito para casais, famílias ou viajantes solitários em busca de tranquilidade.',
    'testimonials.title': 'Testemunhos de Hóspedes',
    'room1.title': 'Quarto Duplo Aconchegante',
    'room1.price': '€90/noite',
    'room1.desc': 'Cama de casal, casa de banho privativa, vista para o jardim.',
    'room2.title': 'Suite Deluxe',
    'room2.price': '€140/noite',
    'room2.desc': 'Cama king, varanda, banheira de hidromassagem.',
    'room3.title': 'Quarto Familiar',
    'room3.price': '€120/noite',
    'room3.desc': 'Duas camas de casal, espaçoso, amigável para famílias.',
    'room4.title': 'Retiro Individual',
    'room4.price': '€70/noite',
    'room4.desc': 'Cama individual confortável, ambiente pacífico.',
    'booking.title': 'Reserve a Sua Estadia',
    'booking.name': 'Nome',
    'booking.email': 'Email',
    'booking.checkin': 'Data de Entrada',
    'booking.checkout': 'Data de Saída',
    'booking.guests': 'Número de Hóspedes',
    'booking.message': 'Mensagem',
    'booking.submit': 'Enviar Pedido de Reserva',
    'gallery.title': 'Galeria',
    'contact.title': 'Contacte-nos',
    'contact.text': 'Entre em contacto para disponibilidade ou perguntas.',
    'contact.address': 'Cheleiros, Mafra, Portugal',
    'contact.phone': 'Telefone: +351 123 456 789',
    'contact.email': 'Email: info@cheleirosbb.pt',
    'footer.copyright': '&copy; 2024 Cheleiros B&amp;B. Todos os direitos reservados.'
  }
};
