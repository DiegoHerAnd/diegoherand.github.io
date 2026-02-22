// ── NAVIGATE ────────────────────────────────────────────────────
function navigate(pageId, clickedItem) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const targetPage = document.getElementById('page-' + pageId);
  targetPage.classList.add('active');

  if (clickedItem) {
    clickedItem.classList.add('active');
  } else {
    document.querySelectorAll('.nav-item').forEach(n => {
      const onclick = n.getAttribute('onclick') || '';
      if (onclick.includes("'" + pageId + "'")) n.classList.add('active');
    });
  }

  const labels = {
    'inicio':      'inicio',
    'sobre-mi':    'sobre-mí',
    'proyectos':   'proyectos',
    'experiencia': 'experiencia',
    'skills':      'skills',
    'contacto':    'contacto'
  };

  document.getElementById('breadcrumb-current').textContent = labels[pageId] || pageId;

  // Typing en el page-title
  const titleEl = targetPage.querySelector('.page-title');
  if (titleEl) typeTitle(titleEl);

  document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' });

  // Animar skill bars al entrar en skills
  if (pageId === 'skills') {
    setTimeout(animateSkillBars, 120);
  }
}

// ── TOGGLE SECTION ───────────────────────────────────────────────
function toggleSection(header) {
  header.classList.toggle('open');
  const items = header.nextElementSibling;
  if (items) {
    items.style.display = header.classList.contains('open') ? '' : 'none';
  }
}

// ── BUSCADOR ─────────────────────────────────────────────────────
document.getElementById('search-input').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.nav-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = (text.includes(query) || query === '') ? '' : 'none';
  });
});

// ── TYPING EFFECT: PAGE TITLE ────────────────────────────────────
function typeTitle(el) {
  const fullText = el.textContent;
  el.textContent = '';
  el.style.borderRight = '2px solid var(--blue-light)';
  el.style.paddingRight = '4px';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += fullText[i];
    i++;
    if (i >= fullText.length) {
      clearInterval(interval);
      setTimeout(() => {
        el.style.borderRight = 'none';
        el.style.paddingRight = '0';
      }, 500);
    }
  }, 28);
}

// ── SKILL BARS ANIMATION ─────────────────────────────────────────
function animateSkillBars() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1)';
        bar.style.width = targetWidth;
      });
    });
  });
}

// ── GLITCH EN VAULT NAME ─────────────────────────────────────────
const vaultName = document.querySelector('.vault-name');
if (vaultName) {
  const glitchChars = '⬡⬢◈◇◆▣░▒▓';
  vaultName.addEventListener('mouseenter', () => {
    const span = vaultName.querySelector('span');
    if (!span) return;
    const original = span.textContent;
    let iterations = 0;
    const interval = setInterval(() => {
      span.textContent = original
        .split('')
        .map((char, idx) => {
          if (char === ' ') return ' ';
          if (idx < iterations) return original[idx];
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        })
        .join('');
      if (iterations >= original.length) {
        span.textContent = original;
        clearInterval(interval);
      }
      iterations += 0.5;
    }, 40);
  });
}

// ── FOOTER: TIEMPO SEGÚN HORA ────────────────────────────────────
function updateFooterTime() {
  const footer = document.querySelector('.sidebar-footer');
  if (!footer) return;
  const hour = new Date().getHours();
  let label;
  if (hour < 6)       label = 'actualizado de madrugada';
  else if (hour < 12) label = 'actualizado esta mañana';
  else if (hour < 14) label = 'actualizado al mediodía';
  else if (hour < 20) label = 'actualizado esta tarde';
  else                label = 'actualizado esta noche';
  footer.innerHTML = `<div class="status-dot"></div> 6 notas · ${label}`;
}
updateFooterTime();

// ── INIT: Animar título de inicio al cargar ──────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const initTitle = document.querySelector('#page-inicio .page-title');
  if (initTitle) setTimeout(() => typeTitle(initTitle), 300);
});