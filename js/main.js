/**
 * M - SPIRIT TAEKWONDO ACADEMY
 * Clean, Robust Client Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
      const icon = menuToggle?.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });

  // 2. Program Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const programCards = document.querySelectorAll('.program-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      programCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Fullscreen Lightbox for Real Gallery Photos
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.gallery-card-overlay h5')?.innerText || 'M - Spirit Dojang Photo';
      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxCaption.innerText = title;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  lightboxClose?.addEventListener('click', () => {
    lightbox?.classList.remove('active');
    document.body.style.overflow = '';
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // 4. Free Trial Booking Modal Dialog
  const trialModal = document.getElementById('trialModal');
  const openTrialBtns = document.querySelectorAll('.open-trial-modal');
  const closeModal = document.getElementById('closeModal');
  const trialForm = document.getElementById('trialModalForm');

  openTrialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      trialModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeModal?.addEventListener('click', () => {
    trialModal?.classList.remove('active');
    document.body.style.overflow = '';
  });

  trialModal?.addEventListener('click', (e) => {
    if (e.target === trialModal) {
      trialModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  trialForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('trialName')?.value.trim();
    const phone = document.getElementById('trialPhone')?.value.trim();
    const batch = document.getElementById('trialBatch')?.value;

    const message = `Hello M-Spirit Taekwondo Academy! I would like to book a Free Trial Class.\n\n👤 Name: ${name}\n📱 WhatsApp: ${phone}\n🥋 Program: ${batch}`;
    const whatsappUrl = `https://wa.me/919964613119?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    trialModal?.classList.remove('active');
    document.body.style.overflow = '';
    trialForm.reset();
  });

  // 5. Direct Inquiry Form
  const inquiryForm = document.getElementById('directInquiryForm');
  inquiryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inqName')?.value.trim();
    const phone = document.getElementById('inqPhone')?.value.trim();
    const program = document.getElementById('inqProgram')?.value;
    const notes = document.getElementById('inqMessage')?.value.trim();

    const msg = `Hello Master! Inquiry from website:\n👤 Name: ${name}\n📱 Phone: ${phone}\n🥋 Interested In: ${program}\n📝 Note: ${notes}`;
    const url = `https://wa.me/919964613119?text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');
    inquiryForm.reset();
  });
});
