// ========================
// CONTACT MODAL
// ========================

function openModal() {
  document.getElementById('contactModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('contactModal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('contactModal')) {
    closeModal();
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// 👇 ADD HERE (last line)
document.querySelectorAll('.contact-option').forEach(item => {
  item.addEventListener('click', () => {
    closeModal();
  });
});
// ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// contact-option click
document.querySelectorAll('.contact-option').forEach(item => {
  item.addEventListener('click', () => {
    closeModal();
  });
});
