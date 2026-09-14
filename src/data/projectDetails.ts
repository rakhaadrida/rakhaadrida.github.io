import PersonalGrowthThumbnail from "../assets/images/project/personalgrowth/thumbnail.png";
import PersonalGrowthOne from "../assets/images/project/personalgrowth/1.png";
import PersonalGrowthTwo from "../assets/images/project/personalgrowth/2.png";
import PersonalGrowthThree from "../assets/images/project/personalgrowth/3.png";

interface Feature {
    title: string;
    description: string;
}

interface Tech {
    title: string;
    description: string;
}

interface Gallery {
    url: string;
    caption: string;
}

interface Project {
    id: string;
    title: string;
    category: string;
    type: string;
    year: string;
    image: string;
    thumbnail: string;
    summary: string;
    briefHeading: string;
    brief: string;
    live: string;
    features: Feature[];
    technologies: Tech[];
    galleries: Gallery[];
    challengeHeading: string;
    challenge: string;
    solutionHeading: string;
    solution: string;
    outcome: string;
}

const projects: Project[] = [
    {
        id: "personalgrowth",
        title: "PersonalGrowth API",
        category: "Backend Engineering / Full-Time",
        type: "Vodea",
        year: "2022",
        image: PersonalGrowthThumbnail,
        thumbnail: PersonalGrowthThumbnail,
        summary:
            "A digital wellness platform that connects users with psychologists through streamlined booking and appointment scheduling.",
        briefHeading: "Making growth feel actionable",
        brief: "A backend system built with Laravel and MySQL to power a company website and its internal backoffice platform. I was responsible for designing and developing the RESTful APIs used by both platforms, along with integrating the system with multiple third-party services for payments, scheduling, cashier synchronization, social media feeds, and automated notifications.",
        live: "https://personalgrowth.co.id/",
        features: [
            {
                title: "Reliable API foundation",
                description:
                    "Built RESTful APIs to support both the public website and internal backoffice, with clear access control across different user roles.",
            },
            {
                title: "Seamless integrations",
                description:
                    "Connected the backend with payment, scheduling, POS, social media, and email services to keep business workflows working together.",
            },
            {
                title: "Automated operations",
                description:
                    "Implemented scheduled tasks, notifications, email delivery, and automated processes to reduce manual work across the platform.",
            },
        ],
        technologies: [
            {
                title: "Backend",
                description: "Laravel + RESTful API + RBAC",
            },
            {
                title: "Database",
                description: "MySQL",
            },
            {
                title: "Integrations",
                description:
                    "Google Meet & Calendar API | Xendit API | MokaPOS API | Onstipe API | Mailgun",
            },
            {
                title: "Automated Processes",
                description: "Task Schedulers + Cron Jobs",
            },
        ],
        galleries: [
            {
                url: PersonalGrowthThumbnail,
                caption: "Product overview",
            },
            {
                url: PersonalGrowthOne,
                caption: "The platform experience",
            },
            {
                url: PersonalGrowthTwo,
                caption: "Booking steps",
            },
            {
                url: PersonalGrowthThree,
                caption: "Payment page",
            },
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
        id: "jakartavet",
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
            {
                title: "Customer experience",
                description:
                    "Make clinic locations, services, doctors, and essential information easy for pet owners to discover and access through a clear, user-friendly website.",
            },
            {
                title: "Online queueing",
                description:
                    "Provide a seamless queueing experience for customers while keeping queue status synchronized with the clinic's ongoing operations.",
            },
            {
                title: "Clinic operations",
                description:
                    "Give administrators a centralized backoffice to manage website content and operate daily queues, including calling and navigating between queue numbers.",
            },
            {
                title: "Multi-branch platform",
                description:
                    "Support JakartaVet's three clinic locations within a single platform while keeping the experience consistent across branches.",
            },
        ],
        technologies: [
            {
                title: "Backend",
                description: "Laravel + PHP + MVC Architecture",
            },
            {
                title: "Database",
                description: "MySQL",
            },
            {
                title: "Frontend",
                description: "HTML + CSS + JavaScript + jQuery",
            },
            {
                title: "Real-time",
                description: "Pusher + Real-time Queue Updates",
            },
            {
                title: "Customer Platform",
                description:
                    "Clinic & Service Information | Online Queueing | Queue Status",
            },
            {
                title: "Backoffice",
                description:
                    "Content Management | Queue Management | Queue Controls",
            },
        ],
        galleries: [
            {
                url: "images/porto/jvet-thumbnail.png",
                caption: "Service overview",
            },
            {
                url: "images/jve/jve1.png",
                caption: "Clinic experience",
            },
            {
                url: "images/jve/jve3.png",
                caption: "Real Time Queue",
            },
            {
                url: "images/jve/jve5.png",
                caption: "Email Notification",
            },
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
];

export default projects;
