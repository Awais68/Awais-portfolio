// Script to seed initial projects to MongoDB
// Run this after setting up MongoDB: node scripts/seedProjects.js

const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  techStack: [String],
  liveUrl: String,
  githubUrl: String,
  gradient: String,
  metric: String,
  impact: String,
  createdAt: { type: Date, default: Date.now },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

const initialProjects = [
  {
    title: "School LMS Platform",
    description:
      "Comprehensive Learning Management System with course enrollment, faculty management, and multi-subject curriculum",
    impact: "8+ subjects with certification programs",
    metric: "8+ Courses",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://school-lms-frontend-ten.vercel.app/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-blue-500 to-cyan-500",
    image: "/images/school.png",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Full-featured admin panel with real-time analytics, revenue tracking, inventory management, and order processing",
    impact: "265 sales tracked with detailed analytics",
    metric: "Real-time Analytics",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://ecommerce-git-main-hamzajiis-projects.vercel.app/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-emerald-500 to-green-500",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "E-commerce Marketplace",
    description:
      "Modern shopping platform with product catalog, cart functionality, and responsive design for fashion retail",
    impact: "Complete shopping experience",
    metric: "Full-Stack Shop",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://final-hackathon-pink.vercel.app/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-purple-500 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    title: "AI Recipe Generator",
    description:
      "Smart recipe platform with AI-powered recipe generation, chef profiles, and interactive cooking assistant",
    impact: "150+ chefs, 2.5K+ recipes",
    metric: "2.5K Recipes",
    techStack: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://java-s-lq3y.vercel.app/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-orange-500 to-red-500",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  },
  {
    title: "Task Planner App",
    description:
      "Smart task management and productivity application with scheduling and organization features",
    impact: "Boost productivity with AI assistance",
    metric: "AI-Powered",
    techStack: ["Next.js", "React", "TypeScript", "AI"],
    liveUrl: "https://planner-jade-nine.vercel.app/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-indigo-500 to-purple-500",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  },
  {
    title: "Campaign Optimization Tool",
    description:
      "Marketing campaign management platform with setup and optimization features for digital marketing",
    impact: "Optimize marketing campaigns",
    metric: "Marketing Tool",
    techStack: ["Next.js", "React", "Tailwind CSS", "Analytics"],
    liveUrl: "https://v0-campaign-setup-and-optimization.vercel.app/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-pink-500 to-rose-500",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  },
  {
    title: "Physical AI Robotics Book",
    description:
      "Educational documentation platform for AI and humanoid robotics with comprehensive learning modules",
    impact: "8 comprehensive modules",
    metric: "Educational",
    techStack: ["Docusaurus", "React", "Markdown", "GitHub Pages"],
    liveUrl: "https://awais68.github.io/physical-AI-Homanoid-Book/",
    githubUrl: "https://github.com/Awais68/physical-AI-Homanoid-Book",
    gradient: "from-cyan-500 to-blue-500",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    title: "Blue Sea Chat App",
    description:
      "Real-time chat and messaging platform with instant communication and modern UI",
    impact: "Real-time messaging",
    metric: "Chat Platform",
    techStack: ["Next.js", "WebSocket", "TypeScript", "Real-time"],
    liveUrl: "https://blue-sea-chat-application.vercel.app/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-sky-500 to-blue-500",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80",
  },
  {
    title: "AI Chatbot (Chainlit)",
    description:
      "Intelligent conversational AI chatbot with natural language processing and contextual responses",
    impact: "NLP-powered conversations",
    metric: "AI Chatbot",
    techStack: ["Python", "Chainlit", "AI/ML", "NLP"],
    liveUrl: "https://chatbot-chainlit-gbyv.onrender.com/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-violet-500 to-purple-500",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
  },
  {
    title: "Al-Quran Institute Online",
    description:
      "Islamic educational platform for Quran learning and Islamic studies with comprehensive courses",
    impact: "Islamic education platform",
    metric: "Educational",
    techStack: ["Next.js", "React", "TypeScript", "Education"],
    liveUrl: "https://alquraninstituteonline.com/",
    githubUrl: "https://github.com/Awais68",
    gradient: "from-green-500 to-emerald-500",
    image: "/images/alquran.png",
  },
];

async function seedProjects() {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    console.log("🗑️  Clearing existing projects...");
    await Project.deleteMany({});
    console.log("✅ Cleared existing projects");

    console.log("🌱 Seeding projects...");
    await Project.insertMany(initialProjects);
    console.log(`✅ Successfully seeded ${initialProjects.length} projects!`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding projects:", error);
    process.exit(1);
  }
}

seedProjects();
