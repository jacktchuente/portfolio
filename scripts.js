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
            description: "Developed Concerto, a healthcare platform for chronic disease management supporting clinicians and patients. Improved clinical workflows through collaboration with physicians and user testing with patients, while building CI/CD pipelines on cloud infrastructure using Django, Angular, Kubernetes, and OpenShift."
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
        }
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
            title: "Health Me",
            description: "Developed a web application enabling users to manage and track their personal health information. The application aims to provide an intuitive interface to log and review medical or fitness data, simplifying everyday health management.",
            link: null
        },
        {
            title: "Review Me",
            description: "Created a data labeling platform allowing users to classify and annotate datasets efficiently. This solution is particularly useful for projects requiring data preparation for machine learning.",
            link: null
        },
        {
            title: "Jolof Shop",
            description: "Designed an online store tailored for users in Senegal to purchase prepaid cards using mobile wallets such as Orange Money or Wave. The platform offers a seamless user experience, enabling quick and secure transactions.",
            link: null
        },

    ],
    contact: {
        email: "jacktchuente@gmail.com",
        github: "https://github.com/etneuhct",
        linkedin: "https://www.linkedin.com/in/jack-tchuente/"
    },

};


function renderPortfolio() {
    document.getElementById("intro").innerHTML = `
        <h1>${portfolioData.name}</h1>
        <h2 style="margin-top: 25px; text-align: center">${portfolioData.title}</h2>
        <p>${portfolioData.about}</p>
        <div class="social-links">
            <a href="mailto:${portfolioData.contact.email}" aria-label="Email">📧</a>
            <a href="${portfolioData.contact.github}" target="_blank" aria-label="GitHub">🐙</a>
            <a href="${portfolioData.contact.linkedin}" target="_blank" aria-label="LinkedIn">🔗</a>
        </div>
    `;

    const experienceSection = document.getElementById("experience");
    portfolioData.experience.forEach(job => {
        experienceSection.innerHTML += `
            <div class="card">
                <h3>${job.title}</h3>
                <p><strong>${job.company}</strong> | ${job.period}</p>
                <p>${job.description}</p>
            </div>
        `;
    });

    const skillsSection = document.querySelector(".skills-grid");
    portfolioData.skills.forEach(skill => {
        skillsSection.innerHTML += `<span>${skill}</span>`;
    });

    const projectsSection = document.querySelector(".projects-grid");
    portfolioData.projects.forEach(project => {
        projectsSection.innerHTML += `
            <div class="card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.link ? `<button onclick="window.open('${project.link}', '_blank')">View Project</button>` : ''}
            </div>
        `;
    });

    const otherProjectsSection = document.querySelector(".other-projects-grid");
    portfolioData.otherProjects.forEach(project => {
        otherProjectsSection.innerHTML += `
            <div class="card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.link ? `<button onclick="window.open('${project.link}', '_blank')">View Project</button>` : ''}
            </div>
        `;
    });
    document.querySelector("footer").innerHTML = `
        <p>&copy; ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.</p>
    `;
}

window.onload = renderPortfolio;
