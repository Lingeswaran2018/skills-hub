
export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  technologies?: string[];
  type: 'work' | 'education' | 'award';
}

export const experiences: Experience[] = [
  {
    title: "AI Intern (Part-time)",
    company: "Yarl IT Hub",
    location: "Remote",
    period: "2024-present",
    description: "Developing real-world AI solutions, gaining hands-on experience in artificial intelligence, machine learning, and model deployment.",
    technologies: ["Python", "Machine Learning", "Model Deployment", "AI"],
    type: "work"
  },
  {
    title: "Trainee Electronic Engineer",
    company: "Vega Innovations",
    location: "Sri Lanka",
    period: "Nov 2023 - May 2024",
    description: "Worked on PCB design, firmware development, and hardware debugging, contributing to the development of innovative electronic systems.",
    technologies: ["PCB Design", "Firmware Development", "Hardware Debugging"],
    type: "work"
  },
  {
    title: "B.Sc. Eng. (Hons) in Electrical Engineering",
    company: "University of Moratuwa",
    location: "Sri Lanka",
    period: "2021-Present",
    description: "Final-year Engineering undergraduate specializing in Electrical Engineering with a CGPA of 3.3.",
    type: "education"
  },
  {
    title: "Advanced Level",
    company: "J/Mahajana College",
    location: "Sri Lanka",
    period: "2006-2018",
    description: "Achieved 3A grades and ranked 2nd in the district.",
    type: "education"
  },
  {
    title: "Varsity Battles Cluster Winners",
    company: "Colombo Stock Exchange and SEC",
    period: "2024",
    description: "Represented the University of Moratuwa and won the cluster-level competition.",
    type: "award"
  },
  {
    title: "MORALenzMedia Awards",
    company: "Island level",
    period: "2023",
    description: "Recognized as one of the Top 10 Announcers.",
    type: "award"
  },
  {
    title: "IDEALIZE 2022 Finalist",
    company: "Gaseo - Online Gas Cylinder Ordering App",
    period: "2022",
    description: "Developed an application for online gas cylinder ordering that reached the finals of the IDEALIZE 2022 competition.",
    technologies: ["App Development", "E-commerce", "UX Design"],
    type: "award"
  }
];

export const certificates = [
  {
    title: "Introduction to Generative AI Learning Path",
    issuer: "Google Cloud Training Online",
    date: "2025"
  },
  {
    title: "Fundamental AI Concepts",
    issuer: "Microsoft Learning",
    date: "2025"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI Stanford University",
    date: "2023"
  }
];
