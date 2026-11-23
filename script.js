document.addEventListener('DOMContentLoaded', () => {
  const photoButton = document.querySelector('.photo-button');
  const lightbox = document.querySelector('#lightbox');

  if (!photoButton || !lightbox) return;

  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const closeButton = lightbox.querySelector('.lightbox-close');

  function openLightbox() {
    const image = photoButton.querySelector('img');

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';

    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = '';
    document.body.style.overflow = '';
    photoButton.focus();
  }

  photoButton.addEventListener('click', openLightbox);
  closeButton.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
});