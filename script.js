// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Fungsi untuk memeriksa tema yang disimpan di localStorage
function checkThemePreference() {
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  if (isDarkMode) {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Light Mode';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = 'Dark Mode';
  }
}

// Jalankan fungsi saat halaman dimuat
checkThemePreference();

// Tambahkan event listener untuk tombol toggle
themeToggle.addEventListener('click', () => {
  // Toggle kelas 'dark-mode' pada body
  body.classList.toggle('dark-mode');

  // Periksa apakah mode gelap aktif
  const isDarkMode = body.classList.contains('dark-mode');

  // Simpan preferensi tema ke localStorage
  if (isDarkMode) {
    localStorage.setItem('darkMode', 'enabled');
    themeToggle.textContent = 'Light Mode';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    themeToggle.textContent = 'Dark Mode';
  }
});