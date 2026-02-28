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

// Close modal when Escape key is pressed
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});