const toggleModeBtn = document.getElementById('toggle-mode');

toggleModeBtn.addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
});
