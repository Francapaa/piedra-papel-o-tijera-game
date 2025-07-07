document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '<h1>¡Funciona!</h1>';
  } else {
    console.error('No se encontró #app');
  }
});