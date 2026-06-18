function getLang() {
  let lang = localStorage.getItem("lang");
  if (!lang || !DATA[lang]) {
    lang = DATA.defaultLang;
    localStorage.setItem("lang", lang);
  }
  return lang;
}

function switchLang() {
  const current = getLang();
  const langs = Object.keys(DATA.langs);
  const idx = langs.indexOf(current);
  const next = langs[(idx + 1) % langs.length];
  localStorage.setItem("lang", next);
  location.reload();
}

function t(obj) {
  const lang = getLang();
  return obj && obj[lang] !== undefined ? obj[lang] : obj;
}

function renderNavbar() {
  const lang = getLang();
  const menu = DATA[lang].menu;
  let items = menu.map(item => {
    const active = location.pathname.endsWith(item.href) || (location.pathname.endsWith("/") && item.href === "index.html") ? "active" : "";
    return `<li class="nav-item"><a class="nav-link ${active}" href="${item.href}">${item.label}</a></li>`;
  }).join("");

  const langs = Object.keys(DATA.langs);
  let langBtns = langs.map(l => {
    const active = l === lang ? "active" : "";
    return `<button class="btn btn-sm btn-outline-light lang-btn ${active}" data-lang="${l}">${l.toUpperCase()}</button>`;
  }).join("");

  document.getElementById("navbar-placeholder").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="index.html">
          <i class="bi bi-cpu"></i> ${t(DATA[lang].inicio.hero.title)}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">${items}</ul>
          <div class="d-flex gap-1">${langBtns}</div>
        </div>
      </div>
    </nav>`;

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      localStorage.setItem("lang", this.dataset.lang);
      location.reload();
    });
  });
}

function renderFooter() {
  const lang = getLang();
  const f = DATA[lang].footer;
  const c = DATA[lang].contacto;
  const redes = c.redes;
  let redIcons = Object.entries(redes).map(([k, v]) => {
    return `<a href="${v}" class="text-white me-3 fs-5" target="_blank"><i class="bi bi-${k}"></i></a>`;
  }).join("");

  document.getElementById("footer-placeholder").innerHTML = `
    <footer class="bg-dark text-white pt-5 pb-3 mt-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <h5><i class="bi bi-cpu"></i> ${t(DATA[lang].inicio.hero.title)}</h5>
            <p class="text-white-50 small">${t(DATA[lang].inicio.hero.desc)}</p>
          </div>
          <div class="col-md-4">
            <h5>${t(DATA[lang].contacto.title)}</h5>
            <ul class="list-unstyled text-white-50 small">
              <li><i class="bi bi-envelope"></i> ${c.email}</li>
              <li><i class="bi bi-telephone"></i> ${c.telefono}</li>
              <li><i class="bi bi-geo-alt"></i> ${c.direccion}</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>${lang === "es" ? "Síguenos" : "Follow us"}</h5>
            <div>${redIcons}</div>
          </div>
        </div>
        <hr class="border-secondary">
        <div class="text-center text-white-50 small">
          <p class="mb-0">${f.copyright}</p>
          <p class="mb-0">${f.hecho}</p>
        </div>
      </div>
    </footer>`;
}

function renderPage(pageId) {
  renderNavbar();
  renderFooter();
  const lang = getLang();
  const data = DATA[lang][pageId];
  const allData = DATA[lang];
  const main = document.getElementById("main-content");

  if (!data) {
    main.innerHTML = `<div class="container py-5"><h2>${lang === "es" ? "Página no encontrada" : "Page not found"}</h2></div>`;
    return;
  }

  switch (pageId) {
    case "inicio":
      renderInicio(main, data, lang);
      break;
    case "acerca":
      renderAcerca(main, data, lang);
      break;
    case "plan-estudios":
      renderPlanEstudios(main, data, lang);
      break;
    case "perfil":
      renderPerfil(main, data, lang);
      break;
    case "campo-laboral":
      renderCampoLaboral(main, data, lang);
      break;
    case "docentes":
      renderDocentes(main, data, lang);
      break;
    case "testimonios":
      renderTestimonios(main, data, lang);
      break;
    case "contacto":
      renderContacto(main, data, lang);
      break;
    default:
      main.innerHTML = `<div class="container py-5"><h2>${lang === "es" ? "Página no encontrada" : "Page not found"}</h2></div>`;
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      localStorage.setItem("lang", this.dataset.lang);
      location.reload();
    });
  });
}

function renderInicio(main, data, lang) {
  const hero = data.hero;
  const destacados = data.destacados.map(d => `
    <div class="col-md-3 col-sm-6">
      <div class="card border-0 shadow-sm h-100 text-center p-4">
        <div class="card-body">
          <i class="bi bi-${d.icono} display-5 text-success mb-3"></i>
          <h5 class="card-title">${d.titulo}</h5>
          <p class="card-text text-muted">${d.desc}</p>
        </div>
      </div>
    </div>`).join("");

  main.innerHTML = `
    <section class="hero-section d-flex align-items-center">
      <div class="container text-center text-white">
        <h1 class="display-3 fw-bold mb-3">${hero.title}</h1>
        <p class="lead fs-4 mb-4">${hero.subtitle}</p>
        <p class="fs-5 mb-4 opacity-75">${hero.desc}</p>
        <a href="acerca.html" class="btn btn-success btn-lg px-5">${hero.cta}</a>
      </div>
    </section>
    <section class="container py-5">
      <div class="row g-4">${destacados}</div>
    </section>`;
}

function renderAcerca(main, data, lang) {
  const areas = data.areas.map(a => `
    <div class="col-md-6 col-lg-3">
      <div class="card border-0 shadow-sm h-100 text-center p-3">
        <div class="card-body">
          <i class="bi bi-${a.icono} display-6 text-success mb-3"></i>
          <h5>${a.nombre}</h5>
          <p class="text-muted small">${a.items}</p>
        </div>
      </div>
    </div>`).join("");

  main.innerHTML = `
    <section class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-5 fw-bold mb-4">${data.title}</h1>
          <p class="lead text-muted">${data.desc}</p>
        </div>
      </div>
      <div class="row g-4 mb-5">
        <div class="col-lg-6">
          <div class="card border-0 shadow-sm h-100 p-4">
            <div class="card-body">
              <h3 class="h5 text-success"><i class="bi bi-bullseye"></i> ${lang === "es" ? "Misión" : "Mission"}</h3>
              <p class="text-muted">${data.mision}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card border-0 shadow-sm h-100 p-4">
            <div class="card-body">
              <h3 class="h5 text-success"><i class="bi bi-eye"></i> ${lang === "es" ? "Visión" : "Vision"}</h3>
              <p class="text-muted">${data.vision}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-3 mb-5">
        <div class="col-12">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="row text-center">
                <div class="col-6 col-lg-3 mb-3 mb-lg-0">
                  <small class="text-muted d-block">${lang === "es" ? "Duración" : "Duration"}</small>
                  <strong>${data.duracion}</strong>
                </div>
                <div class="col-6 col-lg-3 mb-3 mb-lg-0">
                  <small class="text-muted d-block">${lang === "es" ? "Título" : "Degree"}</small>
                  <strong>${data.titulo}</strong>
                </div>
                <div class="col-6 col-lg-3">
                  <small class="text-muted d-block">${lang === "es" ? "Régimen" : "Schedule"}</small>
                  <strong>${data.regimen}</strong>
                </div>
                <div class="col-6 col-lg-3">
                  <small class="text-muted d-block">${lang === "es" ? "Modalidad" : "Admission"}</small>
                  <strong>${data.modalidad}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="text-center mb-4">${lang === "es" ? "Áreas de Formación" : "Training Areas"}</h3>
      <div class="row g-4">${areas}</div>
    </section>`;
}

function renderPlanEstudios(main, data, lang) {
  let accordion = data.semestres.map((s, i) => {
    const materias = s.materias.map(m => `<li>${m}</li>`).join("");
    const show = i === 0 ? "show" : "";
    const collapsed = i === 0 ? "" : "collapsed";
    return `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${collapsed}" type="button" data-bs-toggle="collapse" data-bs-target="#sem${s.numero}">
            <strong>${lang === "es" ? "Semestre" : "Semester"} ${s.numero}:</strong>&nbsp;${s.nombre}
          </button>
        </h2>
        <div id="sem${s.numero}" class="accordion-collapse collapse ${show}" data-bs-parent="#planAccordion">
          <div class="accordion-body">
            <ul class="mb-0">${materias}</ul>
          </div>
        </div>
      </div>`;
  }).join("");

  main.innerHTML = `
    <section class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-5 fw-bold mb-4">${data.title}</h1>
          <p class="lead text-muted">${data.desc}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="accordion" id="planAccordion">${accordion}</div>
        </div>
      </div>
    </section>`;
}

function renderPerfil(main, data, lang) {
  const competencias = data.competencias.map(c => `
    <div class="col-md-6 col-lg-3">
      <div class="card border-0 shadow-sm h-100 text-center p-3">
        <div class="card-body">
          <i class="bi bi-${c.icono} display-6 text-success mb-3"></i>
          <h5 class="card-title">${c.titulo}</h5>
          <p class="card-text text-muted small">${c.desc}</p>
        </div>
      </div>
    </div>`).join("");

  main.innerHTML = `
    <section class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-5 fw-bold mb-4">${data.title}</h1>
          <p class="lead text-muted">${data.desc}</p>
        </div>
      </div>
      <div class="row g-4">${competencias}</div>
    </section>`;
}

function renderCampoLaboral(main, data, lang) {
  const areas = data.areas.map(a => `
    <div class="col-md-6 col-lg-3">
      <div class="card border-0 shadow-sm h-100 text-center p-3">
        <div class="card-body">
          <i class="bi bi-${a.icono} display-6 text-success mb-3"></i>
          <h5 class="card-title">${a.titulo}</h5>
          <p class="card-text text-muted small">${a.desc}</p>
        </div>
      </div>
    </div>`).join("");

  main.innerHTML = `
    <section class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-5 fw-bold mb-4">${data.title}</h1>
          <p class="lead text-muted">${data.desc}</p>
        </div>
      </div>
      <div class="row g-4">${areas}</div>
    </section>`;
}

function renderDocentes(main, data, lang) {
  const docs = data.lista.map(d => `
    <div class="col-md-6 col-lg-3">
      <div class="card border-0 shadow-sm h-100 text-center">
        <img src="${d.foto}" class="card-img-top docente-img" alt="${d.nombre}" loading="lazy">
        <div class="card-body">
          <h5 class="card-title">${d.nombre}</h5>
          <p class="card-text text-success fw-semibold small">${d.especialidad}</p>
          <p class="card-text text-muted small">${d.grados}</p>
        </div>
      </div>
    </div>`).join("");

  main.innerHTML = `
    <section class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-5 fw-bold mb-4">${data.title}</h1>
          <p class="lead text-muted">${data.desc}</p>
        </div>
      </div>
      <div class="row g-4">${docs}</div>
    </section>`;
}

function renderTestimonios(main, data, lang) {
  let carouselItems = data.lista.map((t, i) => {
    const active = i === 0 ? "active" : "";
    return `
      <div class="carousel-item ${active}">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <img src="${t.foto}" class="rounded-circle mb-3 testimonio-img" alt="${t.nombre}" loading="lazy">
            <blockquote class="blockquote">
              <p class="mb-3 fst-italic">"${t.texto}"</p>
              <footer class="blockquote-footer">${t.nombre} <cite class="text-muted">${t.rol}</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>`;
  }).join("");

  let indicators = data.lista.map((_, i) => {
    const active = i === 0 ? "active" : "";
    return `<button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="${i}" class="${active}"></button>`;
  }).join("");

  main.innerHTML = `
    <section class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-5 fw-bold mb-4">${data.title}</h1>
          <p class="lead text-muted">${data.desc}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div id="testimoniosCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators position-static mb-4">${indicators}</div>
            <div class="carousel-inner bg-light rounded-4 p-5 shadow-sm">${carouselItems}</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimoniosCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bg-success rounded-circle" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimoniosCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-success rounded-circle" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </section>`;
}

function renderContacto(main, data, lang) {
  main.innerHTML = `
    <section class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-5 fw-bold mb-4">${data.title}</h1>
          <p class="lead text-muted">${data.desc}</p>
        </div>
      </div>
      <div class="row g-5">
        <div class="col-lg-6">
          <form class="row g-3" onsubmit="event.preventDefault(); alert('${lang === "es" ? "Mensaje enviado correctamente" : "Message sent successfully"}')">
            <div class="col-md-6">
              <label class="form-label">${lang === "es" ? "Nombre" : "Name"}</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="col-md-6">
              <label class="form-label">${lang === "es" ? "Correo" : "Email"}</label>
              <input type="email" class="form-control" required>
            </div>
            <div class="col-12">
              <label class="form-label">${lang === "es" ? "Asunto" : "Subject"}</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="col-12">
              <label class="form-label">${lang === "es" ? "Mensaje" : "Message"}</label>
              <textarea class="form-control" rows="5" required></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-success">${lang === "es" ? "Enviar mensaje" : "Send message"}</button>
            </div>
          </form>
        </div>
        <div class="col-lg-6">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
              <h5>${lang === "es" ? "Información de contacto" : "Contact information"}</h5>
              <ul class="list-unstyled mt-3">
                <li class="mb-3"><i class="bi bi-envelope text-success me-2"></i> ${data.email}</li>
                <li class="mb-3"><i class="bi bi-telephone text-success me-2"></i> ${data.telefono}</li>
                <li class="mb-3"><i class="bi bi-geo-alt text-success me-2"></i> ${data.direccion}</li>
                <li class="mb-3"><i class="bi bi-clock text-success me-2"></i> ${data.horario}</li>
              </ul>
              <hr>
              <h6>${lang === "es" ? "Redes sociales" : "Social media"}</h6>
              <div class="mt-2">
                ${Object.entries(data.redes).map(([k, v]) =>
                  `<a href="${v}" class="btn btn-outline-success btn-sm me-2 mb-2" target="_blank"><i class="bi bi-${k}"></i></a>`
                ).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}
