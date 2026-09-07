interface Education {
    id: string;
    title: string;
    university: string;
    period: string;
    informations: string[];
    summaryTitle: string;
    summary: string;
}

const educations: Education[] = [
    {
        id: "budiluhur",
        title: "Bachelor of Computer Science",
        university: "Budi Luhur University",
        period: "2015 – 2019",
        informations: ["Information Systems", "GPA: 3.88 / 4.00"],
        summaryTitle: "Notable Achievement",
        summary:
            "Guest speaker for HIMASI Budi Luhur, teaching Java and application development fundamentals to students. Created comprehensive learning materials and mentored participants on practical programming concepts.",
    },
];

export default educations;
