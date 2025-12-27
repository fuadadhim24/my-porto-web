document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery__item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || filterValue === itemCategory) {
          gsap.to(item, {
            duration: 0.4,
            opacity: 1,
            scale: 1,
            display: 'block',
            ease: "power2.out",
            onStart: () => {
              item.style.display = 'block';
            }
          });
        } else {
          gsap.to(item, {
            duration: 0.4,
            opacity: 0,
            scale: 0.8,
            display: 'none',
            ease: "power2.in",
            onComplete: () => {
              item.style.display = 'none';
            }
          });
        }
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    });
  });
});
