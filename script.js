function navigate(pageId, clickedItem) {
  // Desactivar todas las páginas y nav items
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Activar la página correspondiente
  document.getElementById('page-' + pageId).classList.add('active');

  // Activar el nav item clickado, o buscarlo por el onclick
  if (clickedItem) {
    clickedItem.classList.add('active');
  } else {
    document.querySelectorAll('.nav-item').forEach(n => {
      const onclick = n.getAttribute('onclick') || '';
      if (onclick.includes("'" + pageId + "'")) {
        n.classList.add('active');
      }
    });
  }

  // Actualizar breadcrumb
  const labels = {
    'inicio':      'inicio',
    'sobre-mi':    'sobre-mí',
    'proyectos':   'proyectos',
    'experiencia': 'experiencia',
    'skills':      'skills',
    'contacto':    'contacto'
  };
  document.getElementById('breadcrumb-current').textContent = labels[pageId] || pageId;

  // Scroll al top del contenido principal
  document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSection(header) {
  header.classList.toggle('open');
  const items = header.nextElementSibling;
  if (items) {
    items.style.display = header.classList.contains('open') ? '' : 'none';
  }
}

// Buscador en la sidebar
document.getElementById('search-input').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.nav-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = (text.includes(query) || query === '') ? '' : 'none';
  });
});