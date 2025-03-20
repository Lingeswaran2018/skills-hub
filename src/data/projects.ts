
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'ai' | 'ml' | 'web' | 'other';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "deepseek-chatbot",
    title: "DeepSeek AI-Based Chatbot",
    description: "Developed and deployed a chatbot using the DeepSeek-R1 1.5B model on my local machine.",
    longDescription: "Built a conversational AI system using DeepSeek-R1, a 1.5 billion parameter language model. The chatbot was optimized for performance on local hardware, making it accessible without requiring cloud resources. The implementation utilized Streamlit for the frontend, Ollama for model deployment, and LangChain for conversation management and context handling.",
    techStack: ["Python", "Streamlit", "Ollama", "LangChain", "DeepSeek-R1"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    category: "ai",
    featured: true
  },
  {
    id: "gemini-chatbot",
    title: "Custom Chatbot using Gemini API",
    description: "Developed a chatbot using the Gemini API for a specific application and deployed it on Streamlit.",
    longDescription: "Created a domain-specific chatbot powered by Google's Gemini API to solve specialized tasks. The application was built with a Streamlit interface for easy user interaction and deployed as a web application. The chatbot was trained on domain-specific data to ensure high-quality, relevant responses for the target use case.",
    techStack: ["Python", "Streamlit", "Gemini API", "API Integration"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    category: "ai",
    featured: true
  },
  {
    id: "whisper-asr",
    title: "Voice-to-Text Model for Low-Resource Languages",
    description: "Improved Automatic Speech Recognition model (ASR) for Tamil and Sinhala by fine-tuning OpenAI's Whisper model.",
    longDescription: "Enhanced speech recognition capabilities for Tamil and Sinhala languages by fine-tuning OpenAI's Whisper model. For Tamil, achieved a 43.32% Word Error Rate (WER) in 8 hours using the Common Voice 11.0 dataset. For Sinhala, which lacked support in the default Whisper model, optimized recognition with a custom dataset to achieve a 46.46% WER. This project significantly improved accessibility for low-resource languages.",
    techStack: ["Python", "Hugging Face", "OpenAI Whisper", "ASR", "Fine-tuning"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    category: "ml",
    featured: true
  },
  {
    id: "llama-restaurant-chatbot",
    title: "Chatbot for Restaurant Scenario",
    description: "Fine-tuned LLaMA 2 using the LoRA technique on a domain-specific question-answer dataset to develop a chatbot for a restaurant scenario.",
    longDescription: "Specialized a large language model (LLaMA 2) for the restaurant industry by fine-tuning it with LoRA (Low-Rank Adaptation) on a custom dataset of restaurant-related interactions. The chatbot can answer questions about menus, reservations, dietary restrictions, and other restaurant-specific queries, providing a cost-effective AI solution for the hospitality sector.",
    techStack: ["Python", "Hugging Face", "LLaMA 2", "LoRA", "Fine-tuning"],
    image: "/placeholder.svg",
    demoUrl: "#", 
    githubUrl: "#",
    category: "ai"
  },
  {
    id: "yolo-customer-identification",
    title: "Real-time Customer Identification System",
    description: "Developed a YOLOv8-based real-time customer identification model for restaurant environments.",
    longDescription: "Built a computer vision system that identifies returning customers in real-time using YOLOv8 object detection and facial recognition. The system is designed for restaurants to enhance customer experience by allowing staff to recognize repeat visitors and provide personalized service, while maintaining privacy compliance. Implemented with OpenCV for video processing and deployed on edge devices for low-latency performance.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Computer Vision", "Object Detection"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    category: "ml"
  },
  {
    id: "color-detection",
    title: "Real-time Color Detection and Tracking System",
    description: "Built a real-time system to detect and track objects of a selected color using a custom color picker and HSV-based dynamic thresholding.",
    longDescription: "Developed a computer vision application that can detect and track objects based on their color in real-time video feeds. Features a custom color picker that allows users to select specific colors to track, and implements HSV color space conversion with dynamic thresholding for robust detection across varying lighting conditions. The system can be used for quality control, sorting, or tracking applications in manufacturing or robotics.",
    techStack: ["Python", "OpenCV", "HSV Color Space", "Thresholding", "Real-time Processing"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    category: "ml"
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description: "Designed and implemented a classic Snake game using C++, integrating joystick controls for smooth directional movement.",
    longDescription: "Recreated the classic Snake game with C++ for embedded systems. Integrated joystick controls for intuitive gameplay and implemented the game on an ILI9341 display through the Wokwi simulation platform. The project demonstrates practical knowledge of embedded systems programming, hardware interaction, and game logic implementation in a resource-constrained environment.",
    techStack: ["C++", "PlatformIO", "Wokwi", "ILI9341 Display", "Embedded Systems"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    category: "other"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};
