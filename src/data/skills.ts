
export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level?: number; // 1-100
  icon?: string;
}

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "PHP", level: 65 },
      { name: "HTML/CSS", level: 85 }
    ]
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "Large Language Models (LLaMA, Gemini)", level: 85 },
      { name: "Transformers", level: 80 },
      { name: "Speech Processing", level: 85 },
      { name: "Computer Vision", level: 75 },
      { name: "Natural Language Processing", level: 80 }
    ]
  },
  {
    category: "Development Tools",
    items: [
      { name: "Hugging Face", level: 90 },
      { name: "Git/GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 95 },
      { name: "Google Colab", level: 90 },
      { name: "Visual Studio Code", level: 85 }
    ]
  },
  {
    category: "Deployment & Infrastructure",
    items: [
      { name: "Ollama", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Streamlit", level: 90 },
      { name: "Django", level: 65 },
      { name: "Cloud Platforms", level: 75 }
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "English", level: 85 },
      { name: "Tamil", level: 100 },
      { name: "Sinhala", level: 65 }
    ]
  }
];
