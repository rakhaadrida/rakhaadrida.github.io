const projects = [
    {
        key: "personalgrowth",
        title: "PersonalGrowth API",
        category: "Backend Engineering / Full-Time",
        type: "Vodea",
        year: "2022",
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
        category: "Full-Stack Engineering / Full-Time",
        type: "Vodea",
        year: "2023",
        image: "images/porto/infopond-thumbnail.png",
        thumbnail: "images/porto/infopond-thumbnail.png",
        summary:
            "A full-stack tourism platform combining location discovery, interactive maps, and content management into a single experience.",
        briefHeading: "Discover more, right where you are.",
        brief: "Infopond was built as a location discovery platform for exploring tourism destinations and location-based information. The platform combines interactive maps, nearby destination discovery, multilingual content, and a content management system to make location-based information easier to discover and manage.",
        live: "https://infoma.au/",
        features: [
            [
                "Location Discovery",
                "Users needed an intuitive way to search, discover, and navigate nearby tourism destinations through an interactive map with accurate distance information.",
            ],
            [
                "Content & Multilingual Experience",
                "Tourism information needed to be structured, searchable, and available across multiple languages without compromising the user experience.",
            ],
            [
                "Content Management",
                "Administrators needed a backoffice to manage destinations, categories, media, and other platform content efficiently.",
            ],
            [
                "Partner & Redemption Flows",
                "The platform needed to support partner-related codes and redemption flows as part of the overall location-based experience.",
            ],
        ],
        tech: [
            ["Backend", "Laravel + Google Maps API"],
            ["Database", "MySQL"],
            ["Frontend", "HTML + CSS + JavaScript + jQuery"],
            [
                "Location & Discovery",
                "Location Search + Distance Calculation + Interactive Maps",
            ],
            [
                "Content & Localization",
                "Multilingual Content | Search | Media | Dynamic Content",
            ],
            [
                "Backoffice & CMS",
                "Destination Management + Content Management | Partner Management | Redeem Codes",
            ],
        ],
        gallery: [
            ["images/porto/infopond-thumbnail.png", "Platform overview"],
            ["images/infopond/infopond3.png", "Discovery interface"],
            ["images/infopond/infopond2.png", "Multilingual Feature"],
            [
                "images/infopond/infopond6.png",
                "Location Search & Distance Calculation",
            ],
        ],
        challengeHeading: "Information is only useful when it is findable",
        challenge:
            "Local information can be dense and inconsistent. The experience needed to turn that raw material into fast, relevant answers.",
        solutionHeading: "A sharper signal",
        solution:
            "The challenge was to bring together geographic data, tourism content, multilingual information, and user interactions into a single location-driven experience. Users needed to quickly discover relevant destinations based on location, while administrators needed a flexible way to manage the underlying content through the backoffice.\n\n This required keeping the location services, backend data, frontend experience, and CMS closely connected while supporting additional flows such as partner codes and redemption functionality.",
        outcome:
            "Delivered a scalable full-stack platform covering the backend, frontend, and backoffice, with location discovery powered by Google Maps and distance calculation. The resulting system provided a unified experience for discovering tourism destinations while giving administrators the tools to manage multilingual content and platform operations efficiently.",
    },
    {
        key: "laravelpos",
        title: "Laravel POS System",
        category: "Full Stack Development / Freelance",
        type: "Cahaya Prima Lestari",
        year: "2021",
        image: "images/porto/cpl-thumbnail.png",
        thumbnail: "images/porto/cpl-thumbnail.png",
        summary:
            "A custom Laravel-based POS and business management system rebuilt to improve operational control, inventory accuracy, and financial reporting.",
        briefHeading: "Replacing the fragile parts",
        brief: "A complete POS and business management system rebuilt from an existing platform using Laravel and MySQL. I was responsible for developing the full system, from backend architecture and business logic to the admin dashboard, while also migrating existing data into the new platform. The system was designed to address operational issues across inventory, transactions, approvals, and financial reporting, and was successfully implemented for two different clients across different years.",
        features: [
            [
                "System Modernization",
                "Rebuild the existing platform and migrate historical data into a more structured Laravel application.",
            ],
            [
                "Inventory Accuracy",
                "Replace unreliable monthly stock tracking with real-time stock card functionality for clearer inventory movement.",
            ],
            [
                "Controlled Transactions",
                "Introduce role-based access and approval workflows to prevent unauthorized or unexplained transaction changes.",
            ],
            [
                "Financial Accuracy",
                "Connect operational data with AR/AP and FIFO-based financial reporting to calculate COGS and support more accurate pricing decisions.",
            ],
        ],
        tech: [
            ["Backend & Database", "Laravel + MySQL"],
            ["Admin Dashboard", "HTML + CSS + Bootstrap + JavaScript + jQuery"],
            [
                "System Migration",
                "Existing Data Migration + Database Restructuring",
            ],
            [
                "Access & Workflow",
                "7 User Roles + Role-Based Access + Approval Workflow",
            ],
            [
                "Inventory Management",
                "Real-Time Stock Card + Stock Movement Tracking",
            ],
            [
                "Reporting & Finance",
                "AR/AP Integration + FIFO Financial Reporting + Excel/PDF Export",
            ],
        ],
        gallery: [
            ["images/porto/cpl-thumbnail.png", "System overview"],
            ["images/CPL/dashboard.png", "Dashboard"],
            ["images/CPL/AR.png", "Account Receivable page"],
            ["images/CPL/LapKeu.png", "FIFO Financial Reporting"],
        ],
        challengeHeading: "The limits of legacy",
        challenge:
            "The old system made routine work fragile: data drifted, reports took too long, and critical knowledge was trapped in manual steps.",
        solutionHeading: "A system built around reality",
        solution:
            "The main challenge was rebuilding an existing system while preserving its historical data and addressing the operational problems that had accumulated over time. Inventory discrepancies made monthly stock tracking difficult, while transaction changes without sufficient control created uncertainty around financial records.\n\n The new system needed to establish clearer workflows, real-time stock visibility, and more reliable financial calculations without disrupting the underlying business operations.",
        outcome:
            "A complete Laravel-based POS and business management system was delivered, covering the backend, database, and admin dashboard. Existing business data was migrated into the new platform, while real-time stock cards, approval workflows, and FIFO-based financial reporting addressed key operational and financial issues.\n\n The system was successfully implemented and used by two different clients across different years, providing more reliable transaction control, clearer inventory visibility, and more accurate financial data for COGS calculation and pricing decisions.",
    },
    {
        key: "nutrilab",
        title: "Nutrilab Pratama",
        category: "Backend Engineering / Full-Time",
        type: "Vodea",
        year: "2023",
        image: "images/porto/np-thumbnail.png",
        thumbnail: "images/porto/np-thumbnail.png",
        summary:
            "A centralized backend powering Nutrilab’s website and backoffice, designed to connect product, content, and business data through a reliable REST API.",
        briefHeading: "Powering a complex product ecosystem",
        brief: "Nutrilab Pratama needed a reliable backend to support both its customer-facing website and internal backoffice. I developed the RESTful APIs that connected the two platforms, handling product data, content management, and core business operations through a centralized Laravel backend.",
        live: "https://nutrilab.co.id/",
        features: [
            [
                "Unified Data Layer",
                "Centralize product, catalog, and website content through a single backend.",
            ],
            [
                "Website API",
                "Deliver structured APIs for the customer-facing platform and its dynamic content.",
            ],
            [
                "Backoffice API",
                "Support internal teams with APIs for managing products, categories, content, and business data.",
            ],
            [
                "Reliable Architecture",
                "Maintain a consistent REST API architecture that could support both platforms without duplicating business logic.",
            ],
        ],
        tech: [
            ["Backend", "Laravel + RESTful API"],
            ["Database", "MySQL"],
            [
                "Business Logic",
                "Product Management + Category Management + Content Management",
            ],
            [
                "API Layer",
                "Authentication + Authorization | Request Validation | Resource Transformation",
            ],
        ],
        gallery: [
            ["images/porto/np-thumbnail.png", "Project overview"],
            ["images/np/np1.png", "Landing Page"],
            ["images/np/np2.png", "Promotion Catalog"],
            ["images/np/np4.png", "Search & Filter Products"],
        ],
        challengeHeading: "One backend, two platforms",
        challenge:
            "The visible interface needed a stable layer underneath it, with clear contracts for products, users, and transaction flows.",
        solutionHeading: "Structure before complexity",
        solution:
            "The main challenge was building a single backend that could serve two different platforms with different needs. The API had to expose the right data for the public website while also supporting the backoffice workflows used to manage that data. This required keeping the API structure consistent, business logic centralized, and responses predictable across both applications.",
        outcome:
            "Delivered a centralized Laravel REST API that became the backend foundation for Nutrilab’s website and backoffice platforms. The system provided a consistent way to manage and consume product and content data, reducing duplication between platforms and creating a more maintainable foundation for the company’s digital ecosystem.",
    },
    {
        key: "ankastory",
        title: "Anka Story",
        category: "Frontend Development / Personal",
        type: "Anka Story",
        year: "2020",
        image: "images/porto/ankastory@2x.jpg",
        thumbnail: "images/porto/ankastory@2x.jpg",
        summary:
            "A personal interactive story built to turn a relationship into a digital anniversary experience filled with memories, milestones, and moments.",
        briefHeading: "A story worth experiencing",
        brief: "An interactive anniversary website created as a personal project to celebrate a relationship through stories, milestones, trivia, photos, and videos. I designed and developed the entire experience from the ground up, turning personal memories into a visual journey that could be explored together.",
        live: "https://ankastory.github.io/",
        features: [
            [
                "A story, not a scroll",
                "Present personal stories and memories as an engaging digital journey",
            ],
            [
                "Timeline of memories",
                "Visualize the relationship's milestones through an interactive love line",
            ],
            [
                "Interactions that matter",
                "Make trivia and other sections feel playful rather than static.",
            ],
            [
                "Personal by design",
                "Used custom copy, images, and videos to make the experience feel singular.",
            ],
        ],
        tech: [
            ["Frontend", "HTML + CSS + Bootstrap + JavaScript"],
            [
                "Experience",
                "Interactive Storytelling + Love Line Timeline + Trivia",
            ],
            ["Design", "Responsive Layout | Animations | Interactive UI"],
            ["Media", "Photo Gallery + Video"],
        ],
        gallery: [
            ["images/porto/ankastory@2x.jpg", "The story experience"],
            ["images/ankastory/2@2x.jpg", "Remembering milestones"],
            ["images/ankastory/4@2x.jpg", "Loveline timeline"],
            ["images/ankastory/5@2x.jpg", "Trivia and interactions"],
        ],
        challengeHeading: "More than just a website",
        challenge:
            "A personal story cannot be reduced to a list of features. It needed pacing, moments of discovery, and enough room for the material to breathe.",
        solutionHeading: "A quiet interactive archive",
        solution:
            "The challenge was to turn something deeply personal into an experience that felt engaging, emotional, and visually cohesive. Instead of presenting memories as a collection of static content, I had to structure stories, milestones, interactive elements, and media into a journey that felt natural to explore.",
        outcome:
            "Anka Story became a personalized digital anniversary experience that brought our story, memories, and milestones together in one interactive space. Beyond being a website, it became a digital keepsake that captured the journey of our relationship in a way that could be revisited and shared.",
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
