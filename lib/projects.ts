export const projects = [
  {
    slug: "ecotrack-sustainability-platform",
    title: "EcoTrack - Sustainability Platform",
    description:
      "A comprehensive platform for tracking and managing environmental impact across organizations. Features real-time analytics, carbon footprint calculations, and sustainability reporting.",
    image: "/modern-sustainability-dashboard-with-charts-and-gr.jpg",
    images: [
      "https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Chart.js"],
    category: "Full Stack Web",
    year: "2024",
    team: "Solo Project",
    detailedDescription:
      "EcoTrack revolutionizes how organizations monitor and manage their environmental impact. Built with modern web technologies, it provides comprehensive sustainability tracking with real-time data visualization, automated reporting, and actionable insights for reducing carbon footprint.",
    features: [
      "Real-time carbon footprint tracking",
      "Automated sustainability reporting",
      "Interactive data visualizations",
      "Multi-organization support",
      "API integrations with IoT sensors",
      "Compliance monitoring and alerts",
    ],
    links: {
      live: "https://ecotrack-demo.vercel.app",
      github: "https://github.com/mugishaclement/ecotrack",
    },
  },
  {
    slug: "financeflow-mobile-app",
    title: "FinanceFlow Mobile App",
    description:
      "Cross-platform mobile application for personal finance management with AI-powered insights, expense tracking, and budget planning features.",
    image: "/mobile-finance-app-interface-with-charts-and-moder.jpg",
    images: [
      "/mobile-finance-app-interface-with-charts-and-moder.jpg",
      "/financeflow-dashboard.jpg",
      "/financeflow-mobile.jpg",
      "/mobile-finance-app-interface-with-charts-and-moder.jpg",
    ],
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Express", "AI/ML"],
    category: "Mobile Development",
    year: "2024",
    team: "3 Developers",
    highlights: ["AI expense categorization", "Offline-first architecture", "4.8★ app store rating"],
    detailedDescription:
      "FinanceFlow transforms personal finance management through intelligent automation and intuitive design. The app leverages AI to categorize expenses, predict spending patterns, and provide personalized financial insights to help users achieve their financial goals.",
    features: [
      "AI-powered expense categorization",
      "Smart budget recommendations",
      "Offline-first data synchronization",
      "Bank account integration",
      "Investment portfolio tracking",
      "Financial goal setting and monitoring",
    ],
    challenges: [
      "Implementing secure offline-first architecture",
      "Training AI models for accurate expense categorization",
      "Ensuring seamless cross-platform performance",
    ],
    links: {
      live: "https://financeflow-app.com",
      github: "https://github.com/mugishaclement/financeflow",
    },
  },
  {
    slug: "cloudops-infrastructure",
    title: "CloudOps Infrastructure",
    description:
      "Complete DevOps solution for a fintech startup including CI/CD pipelines, monitoring, and auto-scaling infrastructure on AWS.",
    image: "/cloud-infrastructure-diagram-with-aws-services-and.jpg",
    images: [
      "/cloud-infrastructure-diagram-with-aws-services-and.jpg",
      "/cloudops-monitoring.jpg",
      "/cloud-infrastructure-diagram-with-aws-services-and.jpg",
      "/cloudops-monitoring.jpg",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    category: "DevOps & Cloud",
    year: "2023",
    team: "2 DevOps Engineers",
    highlights: ["99.9% uptime", "60% cost reduction", "Zero-downtime deployments"],
    detailedDescription:
      "CloudOps Infrastructure provides a robust, scalable, and cost-effective cloud solution for fintech applications. The infrastructure emphasizes security, compliance, and automated operations while maintaining high availability and performance.",
    features: [
      "Automated CI/CD pipelines",
      "Container orchestration with Kubernetes",
      "Infrastructure as Code with Terraform",
      "Comprehensive monitoring and alerting",
      "Auto-scaling based on demand",
      "Security compliance automation",
    ],
    challenges: [
      "Designing fault-tolerant architecture for financial applications",
      "Implementing zero-downtime deployment strategies",
      "Optimizing costs while maintaining performance",
    ],
    links: {
      github: "https://github.com/mugishaclement/cloudops-infra",
    },
  },
  {
    slug: "mediconnect-telemedicine",
    title: "MediConnect Telemedicine",
    description:
      "Secure telemedicine platform connecting patients with healthcare providers. Features video consultations, prescription management, and health records.",
    image: "/telemedicine-video-call-interface-with-medical-das.jpg",
    images: [
      "/telemedicine-video-call-interface-with-medical-das.jpg",
      "/mediconnect-consultation.jpg",
      "/telemedicine-video-call-interface-with-medical-das.jpg",
      "/mediconnect-consultation.jpg",
    ],
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "Redis", "Socket.io"],
    category: "Full Stack Web",
    year: "2023",
    team: "5 Developers",
    highlights: ["HIPAA compliant", "1000+ consultations/month", "End-to-end encryption"],
    detailedDescription:
      "MediConnect bridges the gap between patients and healthcare providers through secure, high-quality telemedicine services. The platform ensures HIPAA compliance while delivering seamless video consultations and comprehensive health record management.",
    features: [
      "HD video consultations with WebRTC",
      "Secure patient health records",
      "Prescription management system",
      "Appointment scheduling and reminders",
      "Real-time chat and file sharing",
      "Integration with electronic health records",
    ],
    challenges: [
      "Ensuring HIPAA compliance across all features",
      "Optimizing video quality for various network conditions",
      "Implementing secure data encryption and storage",
    ],
    links: {
      live: "https://mediconnect-demo.com",
    },
  },
  {
    slug: "agritech-iot-dashboard",
    title: "AgriTech IoT Dashboard",
    description:
      "IoT-powered agricultural monitoring system with real-time sensor data, weather integration, and predictive analytics for crop management.",
    image: "/agricultural-iot-dashboard-with-sensor-data-and-cr.jpg",
    images: [
      "/agricultural-iot-dashboard-with-sensor-data-and-cr.jpg",
      "/agritech-sensors.jpg",
      "/agricultural-iot-dashboard-with-sensor-data-and-cr.jpg",
      "/agritech-sensors.jpg",
    ],
    technologies: ["Vue.js", "Python", "FastAPI", "InfluxDB", "MQTT", "TensorFlow"],
    category: "IoT & Analytics",
    year: "2023",
    team: "4 Developers",
    highlights: ["30% yield improvement", "Real-time monitoring", "Predictive analytics"],
    detailedDescription:
      "AgriTech IoT Dashboard revolutionizes modern farming through intelligent sensor networks and predictive analytics. The system helps farmers optimize crop yields, reduce resource waste, and make data-driven agricultural decisions.",
    features: [
      "Real-time soil and weather monitoring",
      "Predictive crop yield analytics",
      "Automated irrigation control",
      "Pest and disease detection",
      "Resource optimization recommendations",
      "Mobile alerts and notifications",
    ],
    challenges: [
      "Processing high-frequency sensor data in real-time",
      "Developing accurate predictive models for crop yields",
      "Ensuring reliable connectivity in rural environments",
    ],
    links: {
      github: "https://github.com/mugishaclement/agritech-iot",
    },
  },
  {
    slug: "edulearn-lms-platform",
    title: "EduLearn LMS Platform",
    description:
      "Learning Management System with interactive courses, progress tracking, and collaborative features for educational institutions.",
    image: "/modern-learning-management-system-interface-with-c.jpg",
    images: [
      "/modern-learning-management-system-interface-with-c.jpg",
      "/modern-learning-management-system-interface-with-c.jpg",
      "/modern-learning-management-system-interface-with-c.jpg",
      "/modern-learning-management-system-interface-with-c.jpg",
    ],
    technologies: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack Web",
    year: "2022",
    team: "Solo Project",
    highlights: ["5000+ students", "Interactive assessments", "Multi-language support"],
    detailedDescription:
      "EduLearn LMS Platform transforms online education through interactive learning experiences and comprehensive course management. The platform supports educators and students with powerful tools for content creation, assessment, and progress tracking.",
    features: [
      "Interactive course builder",
      "Real-time progress tracking",
      "Collaborative discussion forums",
      "Automated grading system",
      "Multi-language content support",
      "Payment processing for courses",
    ],
    challenges: [
      "Creating engaging interactive learning experiences",
      "Implementing scalable video streaming for courses",
      "Building comprehensive analytics for learning outcomes",
    ],
    links: {
      live: "https://edulearn-lms.vercel.app",
      github: "https://github.com/mugishaclement/edulearn-lms",
    },
  },
]

export const categories = ["All", "Full Stack Web", "Mobile Development", "DevOps & Cloud", "IoT & Analytics"]
