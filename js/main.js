/*
  main.js
  ------------------------------------------------------
  Shared behaviour for every page: mobile nav toggle,
  footer year, and (where present on the page) rendering
  from services-data.js. Include this on every HTML page,
  after services-data.js.
*/

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
  }

  // ---------- Footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Home page: services overview grid ----------
  const homeGrid = document.getElementById('homeServiceGrid');
  if (homeGrid && typeof services !== 'undefined') {
    homeGrid.innerHTML = services.map(s => `
      <a href="services.html#${s.id}" class="svc-card">
        <span class="svc-num">${s.num}</span>
        <h3>${s.name}</h3>
        <p>${s.short}</p>
        <span class="go">View details
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </a>
    `).join('');
  }

  // ---------- Home page: client placeholder marks ----------
  const clientRow = document.getElementById('clientRow');
  if (clientRow) {
    const clientLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
    clientRow.innerHTML = clientLetters.map(l => `<div class="client-mark">Client ${l}</div>`).join('');
  }

  // ---------- Services page: sidebar nav + detail panels ----------
  const serviceNav = document.getElementById('serviceNav');
  const servicePanels = document.getElementById('servicePanels');
  if (serviceNav && servicePanels && typeof services !== 'undefined') {

    const requestedId = location.hash.replace('#', '') || services[0].id;

    serviceNav.innerHTML = services.map(s =>
      `<button data-svc="${s.id}" class="${s.id === requestedId ? 'active' : ''}">${s.num} — ${s.name}</button>`
    ).join('');

    servicePanels.innerHTML = services.map(s => `
      <div class="service-panel ${s.id === requestedId ? 'active' : ''}" id="panel-${s.id}">
        <span class="svc-sub">Service ${s.num} of 07</span>
        <h2>${s.name}</h2>
        <ul>${s.body.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    `).join('');

    function showServicePanel(id) {
      document.querySelectorAll('.service-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + id));
      document.querySelectorAll('.service-nav button').forEach(b => b.classList.toggle('active', b.dataset.svc === id));
    }

    serviceNav.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        location.hash = btn.dataset.svc;
        showServicePanel(btn.dataset.svc);
      });
    });

    window.addEventListener('hashchange', () => {
      const id = location.hash.replace('#', '') || services[0].id;
      showServicePanel(id);
    });
  }

  // ---------- Contact page: form (mailto fallback, no backend) ----------
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const phone = document.getElementById('cf-phone').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const msg = document.getElementById('cf-msg').value.trim();
      const body = `Name: ${name}%0AMobile: ${phone}%0AEmail: ${email}%0A%0AQuery:%0A${encodeURIComponent(msg)}`;
      const mailto = `mailto:mhassociates2026@gmail.com?subject=${encodeURIComponent('Website enquiry from ' + name)}&body=${body}`;
      window.location.href = mailto;
      if (successMsg) successMsg.classList.add('show');
    });
  }

});
