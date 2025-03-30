// Memeriksa status login pengguna
if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html'; // Arahkan ke halaman login jika belum login
}
