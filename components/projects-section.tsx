import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"

const projects = [
  {
    title: "EcoTrack - Sustainability Platform",
    description:
      "A comprehensive platform for tracking and managing environmental impact across organizations. Features real-time analytics, carbon footprint calculations, and sustainability reporting.",
    image: "/modern-sustainability-dashboard-with-charts-and-gr.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Chart.js"],
    category: "Full Stack Web",
    year: "2024",
    team: "Solo Project",
    highlights: ["50% reduction in reporting time", "10k+ users", "Real-time analytics"],
    links: {
      live: "https://ecotrack-demo.vercel.app",
      github: "https://github.com/mugishaclement/ecotrack",
    },
  },
  {
    title: "FinanceFlow Mobile App",
    description:
      "Cross-platform mobile application for personal finance management with AI-powered insights, expense tracking, and budget planning features.",
    image: "/mobile-finance-app-interface-with-charts-and-moder.jpg",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Express", "AI/ML"],
    category: "Mobile Development",
    year: "2024",
    team: "3 Developers",
    highlights: ["AI expense categorization", "Offline-first architecture", "4.8★ app store rating"],
    links: {
      live: "https://financeflow-app.com",
      github: "https://github.com/mugishaclement/financeflow",
    },
  },
  {
    title: "CloudOps Infrastructure",
    description:
      "Complete DevOps solution for a fintech startup including CI/CD pipelines, monitoring, and auto-scaling infrastructure on AWS.",
    image: "/cloud-infrastructure-diagram-with-aws-services-and.jpg",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    category: "DevOps & Cloud",
    year: "2023",
    team: "2 DevOps Engineers",
    highlights: ["99.9% uptime", "60% cost reduction", "Zero-downtime deployments"],
    links: {
      github: "https://github.com/mugishaclement/cloudops-infra",
    },
  },
  {
    title: "MediConnect Telemedicine",
    description:
      "Secure telemedicine platform connecting patients with healthcare providers. Features video consultations, prescription management, and health records.",
    image: "/telemedicine-video-call-interface-with-medical-das.jpg",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "Redis", "Socket.io"],
    category: "Full Stack Web",
    year: "2023",
    team: "5 Developers",
    highlights: ["HIPAA compliant", "1000+ consultations/month", "End-to-end encryption"],
    links: {
      live: "https://mediconnect-demo.com",
    },
  },
  {
    title: "AgriTech IoT Dashboard",
    description:
      "IoT-powered agricultural monitoring system with real-time sensor data, weather integration, and predictive analytics for crop management.",
    image: "/agricultural-iot-dashboard-with-sensor-data-and-cr.jpg",
    technologies: ["Vue.js", "Python", "FastAPI", "InfluxDB", "MQTT", "TensorFlow"],
    category: "IoT & Analytics",
    year: "2023",
    team: "4 Developers",
    highlights: ["30% yield improvement", "Real-time monitoring", "Predictive analytics"],
    links: {
      github: "https://github.com/mugishaclement/agritech-iot",
    },
  },
  {
    title: "EduLearn LMS Platform",
    description:
      "Learning Management System with interactive courses, progress tracking, and collaborative features for educational institutions.",
    image: "/modern-learning-management-system-interface-with-c.jpg",
    technologies: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack Web",
    year: "2022",
    team: "Solo Project",
    highlights: ["5000+ students", "Interactive assessments", "Multi-language support"],
    links: {
      live: "https://edulearn-lms.vercel.app",
      github: "https://github.com/mugishaclement/edulearn-lms",
    },
  },
]

const categories = ["All", "Full Stack Web", "Mobile Development", "DevOps & Cloud", "IoT & Analytics"]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of recent projects demonstrating expertise across different technologies and industries. Each
            project solved real-world problems with measurable impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl font-semibold text-foreground text-balance">{project.title}</CardTitle>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.links.live && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.team}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Want to See More?</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                These are just a few highlights. Check out my GitHub for more projects, contributions, and experiments
                with cutting-edge technologies.
              </p>
              <Button size="lg" asChild>
                <a href="https://github.com/mugishaclement" target="_blank" rel="noopener noreferrer">
                  View All Projects on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
