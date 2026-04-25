const web3formsApiKey = "f4b40c5d-1b5a-4af3-a466-dec0603bb8b6";

const portfolioData = {
    name: "Jack Tchuente",
    title: "Full Stack Developer",
    about: "Experienced Full Stack Developer with expertise in building scalable web applications and systems. Proficient in modern frameworks and technologies such as Django, Angular, ASP.NET, and Kubernetes, with a strong focus on delivering efficient and user-friendly solutions.",
    experience: [
        {
            title: "Full Stack Developer",
            company: "Référence Système",
            period: "April 2023 - Present",
            description: "Developed a high-volume web application managing hundreds of thousands of customer files and thousands of invoices monthly. Optimized authorization with Redis caching, redesigned financial workflows, modernized document generation, and strengthened CI/CD and audit logging using C#, Angular, ASP.NET Core, SQL Server, Docker, Hangfire, and Sentry."
        },
        {
            title: "Full Stack Developer",
            company: "CIUSSSCN",
            period: "September 2019 - August 2023",
            description: "Developed Concerto, a healthcare platform for chronic disease management supporting clinicians and patients. Improved clinical workflows through collaboration with physicians and user testing with patients, while building CI/CD pipelines on cloud infrastructure using Django, Angular, and OpenShift."
        },
        {
            title: "Full Stack Developer",
            company: "ID-M",
            period: "September 2021 - December 2022",
            description: "Designed privacy-focused identity and authentication systems, including a zero-knowledge proof identity platform and a customizable multi-factor authentication service supporting 10+ methods. Built web, mobile, and Google Workspace applications using Django, FastAPI, Angular, Cordova, and Google Apps Script."
        }
    ],
    skills: [
        "Python",
        "C#",
        "Django",
        "FastAPI",
        "Angular",
        "ASP.NET Core",
        "Redis",
        "SQL",
        "Docker",
        "Kubernetes",
        "Git",
        "CI/CD",
        "Ansible",
        "Terraform"
    ],
    projects: [
        {
            title: "Cloudacy",
            description: "Developed a web client to store encrypted files transparently on cloud services like Dropbox or Google Drive. Built with Angular, the application ensures data privacy and offers a user-friendly interface for seamless file management.",
            link: "https://cloudacy.jorganise.app"
        },

        {
            title: "Rest In Pi",
            description: "Developed an online tool allowing users to search for specific sequences in the decimal expansion of π. Users can input a sequence of digits and determine if it appears within the first decimals of π.",
            link: "https://restinpi.com/"
        },
        {
            title: "Review Me",
            description: "Created a data labeling platform allowing users to classify and annotate datasets efficiently. This solution is particularly useful for projects requiring data preparation for machine learning.",
            link: null
        },
    ],
    otherProjects: [
        {
            title: "À Parts Égales",
            description: "Built an expense-splitting application where users enter who paid what, and the app calculates who should reimburse whom to balance shared expenses.",
            link: "https://apartsegales.jorganise.app/"
        },
        {
            title: "Roadmap",
            description: "Developed a note-taking tool for training and learning paths, allowing users to import roadmaps from roadmap.sh and organize their progress.",
            link: "https://roadmap.demo.jorganise.app/"
        },
        {
            title: "Cote Covid",
            description: "Created a web application for grade optimization, intended for students at Université Laval.",
            link: "https://www.unatelier.app/"
        },


        {
            title: "Jolof Shop",
            description: "Designed an online store tailored for users in Senegal to purchase prepaid cards using mobile wallets such as Orange Money or Wave. The platform offers a seamless user experience, enabling quick and secure transactions.",
            link: null
        },
        {
            title: "Health Me",
            description: "Developed a web application enabling users to manage and track their personal health information. The application aims to provide an intuitive interface to log and review medical or fitness data, simplifying everyday health management.",
            link: null
        },
    ],
    contact: {
        github: "https://github.com/jacktchuente",
        linkedin: "https://www.linkedin.com/in/jack-tchuente/"
    },

};

function renderContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("contact-status");

    if (!form || !status) return;

    form.addEventListener("submit", async event => {
        event.preventDefault();

        const submitButton = form.querySelector("button[type='submit']");
        const originalButtonContent = submitButton.innerHTML;

        status.textContent = "";
        status.className = "contact-status";

        if (typeof web3formsApiKey === "undefined" || !web3formsApiKey) {
            status.textContent = "Contact form is not configured yet. Please use the email link above.";
            status.classList.add("error");
            return;
        }

        const formData = new FormData(form);

        if (formData.get("botcheck")) {
            return;
        }

        const payload = {
            access_key: web3formsApiKey,
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            from_name: "Portfolio"
        };

        submitButton.disabled = true;
        submitButton.innerHTML = "Sending...";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Unable to send message.");
            }

            form.reset();
            status.textContent = "Thanks! Your message has been sent successfully.";
            status.classList.add("success");
        } catch (error) {
            status.textContent = "Something went wrong. Please try again or contact me by email.";
            status.classList.add("error");
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonContent;
        }
    });
}

function renderPortfolio() {
    const intro = document.getElementById("intro");
    const experienceSection = document.querySelector(".experience-list");
    const skillsSection = document.querySelector(".skills-grid");
    const projectsSection = document.querySelector(".projects-grid");
    const otherProjectsSection = document.querySelector(".other-projects-grid");
    const footer = document.querySelector("footer");

    intro.innerHTML = `
        <div class="hero-content">
            <h1>${portfolioData.name}</h1>
            <div class="hero-title">${portfolioData.title}</div>
            <p class="hero-about">${portfolioData.about}</p>

            <div class="social-links">
                <a href="#contact" aria-label="Contact">
                    <span>📧</span>
                    <span>Contact</span>
                </a>
                <a href="${portfolioData.contact.github}" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <span>🐙</span>
                    <span>GitHub</span>
                </a>
                <a href="${portfolioData.contact.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <span>🔗</span>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    `;

    experienceSection.innerHTML = portfolioData.experience.map(job => `
        <article class="card experience-card">
            <h3>${job.title}</h3>
            <div class="meta">
                <span class="company">${job.company}</span>
                <span class="period">${job.period}</span>
            </div>
            <p>${job.description}</p>
        </article>
    `).join("");

    skillsSection.innerHTML = portfolioData.skills
        .map(skill => `<span>${skill}</span>`)
        .join("");

    projectsSection.innerHTML = portfolioData.projects.map(project => `
        <article class="card project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${renderProjectLink(project)}
        </article>
    `).join("");

    otherProjectsSection.innerHTML = portfolioData.otherProjects.map(project => `
        <article class="card project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${renderProjectLink(project)}
        </article>
    `).join("");
    renderContactForm();

    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.</p>
    `;
}

function renderProjectLink(project) {
    if (!project.link) return "";

    return `
        <a class="btn" href="${project.link}" target="_blank" rel="noreferrer">
            View Project
            <span aria-hidden="true">→</span>
        </a>
    `;
}

window.addEventListener("DOMContentLoaded", renderPortfolio);