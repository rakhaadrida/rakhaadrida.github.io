interface SkillItems {
    icon: string;
    name: string;
    type: string;
}

interface Skill {
    id: string;
    title: string;
    items: SkillItems[];
}

const skillItems: Skill[] = [
    {
        id: "01",
        title: "Backend Development",
        items: [
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                name: "Laravel",
                type: "Core",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                name: "Node.js",
                type: "Production",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
                name: "NestJS",
                type: "Production",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                name: "Express.js",
                type: "Learning",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
                name: "REST API",
                type: "Core",
            },
        ],
    },
    {
        id: "02",
        title: "Frontend Development",
        items: [
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                name: "JavaScript",
                type: "Core",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
                name: "jQuery",
                type: "Core",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                name: "Bootstrap",
                type: "Core",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                name: "React.js",
                type: "Learning",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                name: "Next.js",
                type: "Learning",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                name: "TypeScript",
                type: "Learning",
            },
        ],
    },
    {
        id: "03",
        title: "Database & Storage",
        items: [
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                name: "MySQL",
                type: "Core",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                name: "PostgreSQL",
                type: "Production",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                name: "MongoDB",
                type: "Learning",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg",
                name: "Redis",
                type: "Learning",
            },
        ],
    },
    {
        id: "04",
        title: "Tools & Workflow",
        items: [
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                name: "Git",
                type: "Core",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
                name: "Postman",
                type: "Core",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
                name: "DigitalOcean",
                type: "Production",
            },
            {
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
                name: "Ubuntu",
                type: "Familiar",
            },
        ],
    },
];

export default skillItems;
