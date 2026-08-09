const projects = [
    {
        key: "personalgrowth",
        title: "PersonalGrowth API",
        category: "Backend Engineering / Full-Time",
        type: "Vodea",
        year: "2023",
        image: "images/porto/pg-thumbnail.png",
        thumbnail: "images/porto/pg-thumbnail.png",
        summary:
            "A digital wellness platform that connects users with psychologists through streamlined booking and appointment scheduling.",
        briefHeading: "Making growth feel actionable",
        brief: "A backend system built with Laravel and MySQL to power a company website and its internal backoffice platform. I was responsible for designing and developing the RESTful APIs used by both platforms, along with integrating the system with multiple third-party services for payments, scheduling, cashier synchronization, social media feeds, and automated notifications.",
        live: "https://personalgrowth.co.id/",
        features: [
            [
                "Reliable API foundation",
                "Built RESTful APIs to support both the public website and internal backoffice, with clear access control across different user roles.",
            ],
            [
                "Seamless integrations",
                "Connected the backend with payment, scheduling, POS, social media, and email services to keep business workflows working together.",
            ],
            [
                "Automated operations",
                "Implemented scheduled tasks, notifications, email delivery, and automated processes to reduce manual work across the platform.",
            ],
        ],
        tech: [
            ["Backend", "Laravel + RESTful API + RBAC"],
            ["Database", "MySQL"],
            [
                "Integrations",
                "Google Meet & Calendar API | Xendit API | MokaPOS API | Onstipe API | Mailgun",
            ],
            ["Automated Processes", "Task Schedulers + Cron Jobs"],
        ],
        gallery: [
            ["images/porto/pg-thumbnail.png", "Product overview"],
            ["images/pg/pg1.png", "The platform experience"],
            ["images/pg/pg5.png", "Booking steps"],
            ["images/pg/pg9.png", "Payment page"],
        ],
        challengeHeading: "A lot of moving parts",
        challenge:
            "The product brought together user accounts, program content, progress states, and notifications. Every part needed to feel simple to the user while remaining predictable for the team maintaining it.",
        solutionHeading: "A system users can trust",
        solution:
            "One of the main challenges was connecting multiple third-party services while keeping the backend workflow consistent and reliable.\n\n The system had to coordinate payment processing, booking, meeting scheduling, calendar events, cashier synchronization, social media feeds, and automated notifications across different APIs and services.\n\n Another challenge was designing the API layer to serve two different platforms — the public website and the internal backoffice — while maintaining appropriate access control for different user roles.",
        outcome:
            "The project resulted in a centralized backend that supported both the company website and internal backoffice operations through a consistent RESTful API layer.\n\n Multiple business processes that would otherwise require manual handling were integrated and automated, including online payments, meeting scheduling, calendar management, cashier synchronization, social media feeds, and email notifications.\n\n The backend also provided a structured role-based system for different backoffice users, creating a foundation that could support the platform's day-to-day operations and future development.",
    },
    {
        key: "jakartavet",
        title: "Jakarta Vet",
        category: "Full-Stack Engineering / Full-Time",
        type: "Vodea",
        year: "2021",
        image: "images/porto/jvet-thumbnail.png",
        thumbnail: "images/porto/jvet-thumbnail.png",
        summary:
            "A veterinary care platform built to connect pet owners with JakartaVet's clinics, services, and real-time queueing experience.",
        briefHeading: "A better way to care",
        brief: "JakartaVet needed more than a website to present its veterinary services. The platform was designed to give pet owners an easier way to discover clinic information, explore available services, and access veterinary care through an online queueing system. Behind the customer-facing experience, a dedicated backoffice helped the clinic team manage content and operate daily queues.",
        live: "https://jakartavet.com/",
        features: [
            [
                "Customer experience",
                "Make clinic locations, services, doctors, and essential information easy for pet owners to discover and access through a clear, user-friendly website.",
            ],
            [
                "Online queueing",
                "Provide a seamless queueing experience for customers while keeping queue status synchronized with the clinic's ongoing operations.",
            ],
            [
                "Clinic operations",
                "Give administrators a centralized backoffice to manage website content and operate daily queues, including calling and navigating between queue numbers.",
            ],
            [
                "Multi-branch platform",
                "Support JakartaVet's three clinic locations within a single platform while keeping the experience consistent across branches.",
            ],
        ],
        tech: [
            ["Backend", "Laravel + PHP + MVC Architecture"],
            ["Database", "MySQL"],
            ["Frontend", "HTML + CSS + JavaScript + jQuery"],
            ["Real-time", "Pusher + Real-time Queue Updates"],
            [
                "Customer Platform",
                "Clinic & Service Information | Online Queueing | Queue Status",
            ],
            [
                "Backoffice",
                "Content Management | Queue Management | Queue Controls",
            ],
        ],
        gallery: [
            ["images/porto/jvet-thumbnail.png", "Service overview"],
            ["images/jve/jve1.png", "Clinic experience"],
            ["images/jve/jve3.png", "Real Time Queue"],
            ["images/jve/jve5.png", "Email Notification"],
        ],
        challengeHeading: "Care is time-sensitive",
        challenge:
            "Clinic teams need to move quickly, but booking systems often make simple actions feel administrative and slow.",
        solutionHeading: "Less admin, more care",
        solution:
            "The main challenge was connecting a customer-facing veterinary website with the clinic's day-to-day queue operations. The platform needed to serve two very different users: pet owners looking for a simple way to access veterinary services, and clinic staff who needed a practical interface to manage content and operate the queue.\n\n The queueing workflow added another layer of complexity. Queue numbers had to be managed from the backoffice while keeping the customer-facing experience synchronized with the clinic's current queue status. This required the website, backoffice, and real-time communication layer to work together as one system.",
        outcome:
            "The result was a complete digital platform that brought JakartaVet's customer experience and clinic operations into a single system. Pet owners could discover services, access clinic information, and interact with the online queueing system, while clinic staff could manage website content and operate daily queues through the backoffice.\n\n The platform has continued to support JakartaVet's operations across its three clinic locations since its initial development in 2021, making it more than a marketing website—it became part of the clinic's day-to-day digital workflow.",
    },
    {
        key: "infopond",
        title: "Infopond",
        category: "Full stack / Discovery",
        type: "Client project",
        year: "2023",
        image: "images/porto/infopond6.png",
        thumbnail: "images/porto/infopond-thumbnail.png",
        summary:
            "A location-led discovery platform that helps people find useful places and information around them.",
        briefHeading: "Turning place into context",
        brief: "Infopond combines location, search, and structured business information into a more useful local discovery experience.",
        live: "https://infoma.au/",
        features: [
            [
                "Search with context",
                "Structured listings around the information people actually need.",
            ],
            [
                "Location intelligence",
                "Integrated geolocation and map-oriented data flows.",
            ],
            [
                "A useful back office",
                "Made content management practical for the team behind the listings.",
            ],
        ],
        tech: [
            ["Backend", "Laravel"],
            ["Data", "MySQL"],
            ["Interface", "Bootstrap + JavaScript"],
            ["Integrations", "Google API + geolocation"],
        ],
        gallery: [
            ["images/porto/infopond6.png", "Discovery interface"],
            ["images/porto/infopond-thumbnail.png", "Platform overview"],
        ],
        challengeHeading: "Information is only useful when it is findable",
        challenge:
            "Local information can be dense and inconsistent. The experience needed to turn that raw material into fast, relevant answers.",
        solutionHeading: "A sharper signal",
        solution:
            "I connected structured content with location-aware flows, keeping the interface focused on what someone can do next.",
        outcome: "A more useful way to navigate local information.",
    },
    {
        key: "cpl",
        title: "Cahaya Prima Lestari",
        category: "Business systems / ERP",
        type: "Client project",
        year: "2021",
        image: "images/porto/cpl.png",
        thumbnail: "images/porto/cpl-thumbnail.png",
        summary:
            "A business system replacement that brought manufacturing operations into one more dependable workflow.",
        briefHeading: "Replacing the fragile parts",
        brief: "CPL needed a modern operational system for stock, purchasing, sales, approvals, and reporting—without losing the practical knowledge in the legacy process.",
        features: [
            [
                "Reliable stock",
                "Created real-time inventory tracking to reduce monthly discrepancies.",
            ],
            [
                "Clear approvals",
                "Added guardrails around sensitive transactions and business decisions.",
            ],
            [
                "Useful reporting",
                "Supported exports and operational views for day-to-day decisions.",
            ],
        ],
        tech: [
            ["Backend", "Laravel"],
            ["Data", "MySQL"],
            ["Interface", "Bootstrap + JavaScript"],
            ["Output", "Excel + PDF export"],
        ],
        gallery: [
            ["images/porto/cpl.png", "Operations system"],
            ["images/porto/cpl-thumbnail.png", "System overview"],
        ],
        challengeHeading: "The cost of legacy",
        challenge:
            "The old system made routine work fragile: data drifted, reports took too long, and critical knowledge was trapped in manual steps.",
        solutionHeading: "A system built around reality",
        solution:
            "The replacement preserved the workflows people understood while adding stronger data relationships, validation, and reporting.",
        outcome:
            "More reliable operations, from stock movement to management reporting.",
    },
    {
        key: "nextplace",
        title: "Nextplace / Nutrilab",
        category: "Backend engineering / API",
        type: "Client project",
        year: "2022",
        image: "images/porto/np1.png",
        thumbnail: "images/porto/np-thumbnail.png",
        summary:
            "A structured API layer for a nutrition and commerce experience built to connect product, user, and order data.",
        briefHeading: "A dependable API layer",
        brief: "Nextplace needed backend services that could support a polished customer experience while keeping product and order logic maintainable.",
        live: "https://nutrilab.co.id/",
        features: [
            [
                "Consistent data",
                "Established predictable RESTful patterns for core product flows.",
            ],
            [
                "Integration ready",
                "Prepared endpoints for clients, services, and operational tooling.",
            ],
            [
                "Built to debug",
                "Kept contracts explicit so issues could be isolated quickly.",
            ],
        ],
        tech: [
            ["Backend", "Laravel"],
            ["Data", "MySQL"],
            ["Interface", "Bootstrap"],
            ["Workflow", "RESTful API + Postman"],
        ],
        gallery: [
            ["images/porto/np1.png", "Customer experience"],
            ["images/porto/np-thumbnail.png", "API project overview"],
        ],
        challengeHeading: "A product is only as strong as its connections",
        challenge:
            "The visible interface needed a stable layer underneath it, with clear contracts for products, users, and transaction flows.",
        solutionHeading: "Structure before complexity",
        solution:
            "The API was organized around concise resources and consistent responses, giving the frontend a dependable surface to work from.",
        outcome:
            "A cleaner backend foundation for a growing nutrition product.",
    },
    {
        key: "ankastory",
        title: "Anka Story",
        category: "Interactive experience",
        type: "Personal project",
        year: "2020",
        image: "images/porto/ankastory.jpg",
        thumbnail: "images/porto/ankastory@2x.jpg",
        summary:
            "A digital love story made from personal narratives, small surprises, and the memories worth keeping.",
        briefHeading: "Making a memory tangible",
        brief: "Anka Story is an interactive storytelling website built to turn personal history into something immersive, browsable, and lasting.",
        live: "https://ankastory.github.io/",
        features: [
            [
                "A story, not a scroll",
                "Organized memories into chapters, timeline moments, trivia, and galleries.",
            ],
            [
                "Personal by design",
                "Used custom copy, images, and videos to make the experience feel singular.",
            ],
            [
                "Simple technology",
                "Kept the stack lightweight so the story remained the main character.",
            ],
        ],
        tech: [
            ["Structure", "HTML"],
            ["Style", "CSS + Bootstrap"],
            ["Behavior", "JavaScript"],
            ["Media", "Image + video gallery"],
        ],
        gallery: [
            ["images/porto/ankastory.jpg", "The story experience"],
            ["images/porto/ankastory@2x.jpg", "A personal archive"],
        ],
        challengeHeading: "How do you design for feeling?",
        challenge:
            "A personal story cannot be reduced to a list of features. It needed pacing, moments of discovery, and enough room for the material to breathe.",
        solutionHeading: "A quiet interactive archive",
        solution:
            "The experience uses familiar web patterns as a frame for personal content, letting chapters, images, and small interactions carry the emotion.",
        outcome:
            "A private story transformed into a digital experience meant to be revisited.",
    },
];

const projectKey =
    new URLSearchParams(window.location.search).get("project") ||
    projects[0].key;
const project = projects.find((item) => item.key === projectKey) || projects[0];
const index = projects.findIndex((item) => item.key === project.key);
const text = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
};
const link = (label, href, className = "") =>
    href
        ? `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`
        : "";

document.title = `${project.title} — Rakha Adrida`;
text("project-category", `${project.category} / ${project.type}`);
text("project-title", project.title);
text("project-summary", project.summary);
text("project-brief-heading", project.briefHeading);
text("project-brief", project.brief);
text("project-challenge-heading", project.challengeHeading);
text("project-challenge", project.challenge);
text("project-solution-heading", project.solutionHeading);
text("project-solution", project.solution);
text("project-outcome", project.outcome);
text("gallery-note", "Selected screens and project artifacts.");
const meta = document.getElementById("project-meta");
meta.innerHTML = [
    `<span>${project.type}</span>`,
    `<span>${project.year}</span>`,
    `<span>${project.category}</span>`,
].join("");
const image = document.getElementById("project-hero-image");
image.src = project.image;
image.alt = `${project.title} project preview`;
document.getElementById("project-actions").innerHTML =
    `${link("Live preview", project.live, "action-link")}${link("Repository", project.github, "action-link")}`;
document.getElementById("project-features").innerHTML = project.features
    .map(
        ([title, description]) =>
            `<article class="feature-item"><h3>${title}</h3><p>${description}</p></article>`,
    )
    .join("");
document.getElementById("project-tech").innerHTML = project.tech
    .map(
        ([label, value]) =>
            `<div class="tech-item"><small>${label}</small><strong>${value}</strong></div>`,
    )
    .join("");
document.getElementById("project-gallery").innerHTML = project.gallery
    .map(
        ([src, caption]) =>
            `<figure class="gallery-card"><img src="${src}" alt="${caption} from ${project.title}" loading="lazy"><figcaption>${caption}</figcaption></figure>`,
    )
    .join("");
const previous = projects[(index - 1 + projects.length) % projects.length];
const next = projects[(index + 1) % projects.length];
const previousLink = document.getElementById("previous-project");
previousLink.href = `project.html?project=${previous.key}`;
previousLink.innerHTML = `← ${previous.title}`;
const nextLink = document.getElementById("next-project");
nextLink.href = `project.html?project=${next.key}`;
nextLink.innerHTML = `${next.title} →`;
