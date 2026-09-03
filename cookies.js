/* Aviso de cookies + consentimento (LGPD) — Aranha & Costa Advogados
   Opt-in: o Microsoft Clarity só é carregado após o visitante clicar em "Aceitar".
   A escolha fica guardada no navegador do visitante (localStorage). */
(function () {
  var CLARITY_ID = 'ycm0b35hnd';
  var KEY = 'ac_cookie_consent'; // 'accepted' | 'rejected'

  function loadClarity() {
    if (window.__acClarity) return;
    window.__acClarity = true;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  function injectStyle() {
    if (document.getElementById('ac-cookie-style')) return;
    var css =
      '.cookie-bar{position:fixed;left:0;right:0;bottom:0;z-index:200;transform:translateY(115%);transition:transform .45s cubic-bezier(.4,0,.2,1);padding:0 clamp(14px,4vw,40px) clamp(14px,3vw,26px);pointer-events:none}' +
      '.cookie-bar.show{transform:translateY(0)}' +
      '.cookie-inner{pointer-events:auto;max-width:1080px;margin:0 auto;background:var(--surface,#F5F3EC);border:1px solid var(--line,#CFC6B6);border-radius:6px;box-shadow:0 14px 44px rgba(30,26,20,.20);padding:18px 22px;display:flex;align-items:center;gap:22px;flex-wrap:wrap}' +
      '.cookie-txt{font-family:\'Abel\',sans-serif;font-size:14.5px;line-height:1.55;color:var(--ink-strong,#362F26);margin:0;flex:1;min-width:240px}' +
      '.cookie-txt a{color:var(--accent,#384042);border-bottom:1px solid var(--line-strong,#C4BBAC)}' +
      '.cookie-acts{display:flex;gap:10px;flex-shrink:0}' +
      '.cookie-btn{font-family:\'Abel\',sans-serif;font-size:13px;letter-spacing:.06em;text-transform:uppercase;padding:11px 22px;border-radius:2px;cursor:pointer;border:1px solid var(--line-strong,#C4BBAC);transition:border-color .2s,background .2s,opacity .2s;line-height:1}' +
      '.cookie-reject{background:transparent;color:var(--ink-strong,#362F26)}' +
      '.cookie-reject:hover{border-color:var(--ink-strong,#362F26)}' +
      '.cookie-accept{background:var(--ink-strong,#362F26);color:var(--surface,#F5F3EC);border-color:var(--ink-strong,#362F26)}' +
      '.cookie-accept:hover{opacity:.9}' +
      '@media (max-width:620px){.cookie-inner{padding:16px 18px;gap:14px}.cookie-acts{width:100%}.cookie-btn{flex:1;padding:12px 10px}}';
    var st = document.createElement('style');
    st.id = 'ac-cookie-style';
    st.textContent = css;
    document.head.appendChild(st);
  }

  function showBanner() {
    injectStyle();
    var bar = document.createElement('div');
    bar.className = 'cookie-bar';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Aviso de cookies');
    bar.innerHTML =
      '<div class="cookie-inner">' +
      '<p class="cookie-txt">Utilizamos cookies para analisar o uso do site e melhorar sua experiência. ' +
      'Você pode aceitar ou recusar esse monitoramento a qualquer momento. ' +
      'Ao continuar, seus dados de navegação são tratados conforme a LGPD.</p>' +
      '<div class="cookie-acts">' +
      '<button type="button" class="cookie-btn cookie-reject">Recusar</button>' +
      '<button type="button" class="cookie-btn cookie-accept">Aceitar</button>' +
      '</div></div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('show'); });

    function close() {
      bar.classList.remove('show');
      setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 450);
    }
    function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

    bar.querySelector('.cookie-accept').addEventListener('click', function () {
      save('accepted'); loadClarity(); close();
    });
    bar.querySelector('.cookie-reject').addEventListener('click', function () {
      save('rejected'); close();
    });
  }

  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  if (choice === 'accepted') { loadClarity(); return; }
  if (choice === 'rejected') { return; }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
})();
