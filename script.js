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

  // En móvil: cerrar el sidebar al navegar
  if (window.innerWidth <= 768) {
    closeSidebar();
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
  const bars = document.querySelectorAll('.skill-bar');

  const targets = Array.from(bars).map(bar => {
    const match = bar.getAttribute('style') && bar.getAttribute('style').match(/width:\s*([^;]+)/);
    return match ? match[1].trim() : bar.style.width || '0%';
  });

  bars.forEach(bar => {
    bar.style.transition = 'none';
    bar.style.width = '0%';
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bars.forEach((bar, i) => {
        bar.style.transition = 'width 2.2s cubic-bezier(0.22, 1, 0.36, 1)';
        bar.style.width = targets[i];
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

// ── THEME TOGGLE ─────────────────────────────────────────────────
function toggleTheme() {
  const btn = document.getElementById('theme-toggle');
  btn.classList.remove('flipping');
  void btn.offsetWidth;
  btn.classList.add('flipping');
  btn.addEventListener('animationend', () => btn.classList.remove('flipping'), { once: true });
  document.body.classList.toggle('light');
}

// ── SIDEBAR MÓVIL ────────────────────────────────────────────────
const sidebar  = document.getElementById('sidebar');
const overlay  = document.getElementById('sidebar-overlay');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  // Bloquear scroll del body mientras el drawer está abierto
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleSidebar() {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
}

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});

// Resetear estado del sidebar si se redimensiona a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeSidebar();
  }
});

// ── INIT ─────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const initTitle = document.querySelector('#page-inicio .page-title');
  if (initTitle) setTimeout(() => typeTitle(initTitle), 300);
});