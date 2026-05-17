function renderLanguageSwitch(data) {
    const isEnglish = data.currentLanguage === "en";

    return `
        <nav class="language-switch" aria-label="${data.languageLabel}">
            <a href="${data.switchLinks.en}"${isEnglish ? ' aria-current="page"' : ""}>EN</a>
            <span>/</span>
            <a href="${data.switchLinks.fr}"${isEnglish ? "" : ' aria-current="page"'}>FR</a>
        </nav>
    `;
}

function renderProjectLink(project, data) {
    if (!project.link) {
        return "";
    }

    return `
        <a class="btn" href="${project.link}" target="_blank" rel="noopener noreferrer">
            ${data.labels.projectLink}
            <span aria-hidden="true">→</span>
        </a>
    `;
}

function renderCardList(items, renderer) {
    return items.map(renderer).join("");
}

function renderPortfolio() {
    const data = window.portfolioData;

    if (!data) {
        return;
    }

    const intro = document.getElementById("intro");
    const experienceSection = document.querySelector(".experience-list");
    const skillsSection = document.querySelector(".skills-grid");
    const projectsSection = document.querySelector(".projects-grid");
    const otherProjectsSection = document.querySelector(".other-projects-grid");
    const footer = document.querySelector("footer");

    intro.innerHTML = `
        <div class="hero-content">
            ${renderLanguageSwitch(data)}
            <div class="eyebrow">${data.eyebrow}</div>
            <h1>${data.name}</h1>
            <div class="hero-title">${data.title}</div>
            <p class="hero-about">${data.about}</p>
            <div class="social-links">
                <a class="btn primary" href="${data.contact.resume}" target="_blank" rel="noopener noreferrer" aria-label="${data.labels.downloadResume}">
                    <span>📄</span>
                    <span>${data.labels.downloadResume}</span>
                </a>
                <a class="btn" href="mailto:${data.contact.email}" aria-label="${data.labels.emailAria}">
                    <span>📧</span>
                    <span>${data.labels.emailMe}</span>
                </a>
                <a class="btn" href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <span>🔗</span>
                    <span>LinkedIn</span>
                </a>
                <a class="btn" href="${data.contact.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <span>🐙</span>
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    `;

    skillsSection.innerHTML = renderCardList(
        data.skills,
        skill => `<span>${skill}</span>`
    );

    experienceSection.innerHTML = renderCardList(
        data.experience,
        job => `
            <article class="card experience-card">
                <h3>${job.title}</h3>
                <div class="meta">
                    <span class="company">${job.company}</span>
                    <span class="period">${job.period}</span>
                </div>
                <p>${job.description}</p>
            </article>
        `
    );

    projectsSection.innerHTML = renderCardList(
        data.projects,
        project => `
            <article class="card project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${renderProjectLink(project, data)}
            </article>
        `
    );

    otherProjectsSection.innerHTML = renderCardList(
        data.otherProjects,
        project => `
            <article class="card project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${renderProjectLink(project, data)}
            </article>
        `
    );

    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} ${data.name}. ${data.labels.footerRights}</p>
    `;
}

window.addEventListener("DOMContentLoaded", renderPortfolio);
