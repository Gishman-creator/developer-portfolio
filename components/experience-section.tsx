import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Full Stack Developer",
    company: "TechFlow Solutions",
    location: "Kigali, Rwanda (Remote)",
    type: "Full-time",
    description:
      "Leading development of enterprise-grade applications serving 50k+ users. Architecting scalable solutions using modern tech stack and mentoring junior developers.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Led migration to microservices architecture",
      "Mentored 5 junior developers",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    website: "https://techflowsolutions.com",
  },
  {
    period: "2023 — 2024",
    title: "Full Stack Developer & DevOps Engineer",
    company: "InnovateLab",
    location: "Kigali, Rwanda",
    type: "Full-time",
    description:
      "Developed and deployed multiple client projects ranging from e-commerce platforms to fintech applications. Managed cloud infrastructure and implemented DevOps practices.",
    achievements: [
      "Delivered 12+ projects on time and within budget",
      "Achieved 99.9% uptime for production applications",
      "Reduced infrastructure costs by 40% through optimization",
      "Implemented automated testing reducing bugs by 70%",
    ],
    technologies: ["React", "Python", "Django", "PostgreSQL", "AWS", "Terraform"],
    website: "https://innovatelab.rw",
  },
  {
    period: "2022 — 2023",
    title: "Mobile App Developer",
    company: "MobileTech Rwanda",
    location: "Kigali, Rwanda",
    type: "Full-time",
    description:
      "Specialized in cross-platform mobile development using React Native and Flutter. Built consumer-facing apps with focus on performance and user experience.",
    achievements: [
      "Developed 8 mobile apps with 4.5+ star ratings",
      "Implemented offline-first architecture",
      "Optimized app performance reducing crash rate by 90%",
      "Led mobile development team of 4 developers",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Node.js", "MongoDB"],
    website: "https://mobiletech.rw",
  },
  {
    period: "2021 — 2022",
    title: "Junior Full Stack Developer",
    company: "StartupHub Kigali",
    location: "Kigali, Rwanda",
    type: "Full-time",
    description:
      "Started my professional journey building web applications for local startups. Gained experience in full development lifecycle from requirements to deployment.",
    achievements: [
      "Built 15+ web applications from scratch",
      "Learned modern development practices and tools",
      "Contributed to open-source projects",
      "Completed AWS certification",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MySQL", "AWS"],
    website: "https://startuphub.rw",
  },
  {
    period: "2020 — 2021",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Kigali, Rwanda",
    type: "Freelance",
    description:
      "Provided web development services to local businesses and international clients. Built responsive websites and small web applications.",
    achievements: [
      "Completed 25+ freelance projects",
      "Built strong client relationships with 95% satisfaction rate",
      "Developed expertise in modern web technologies",
      "Generated consistent revenue stream",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
  },
]

const education = [
  {
    period: "2018 — 2021",
    title: "Bachelor of Science in Computer Science",
    institution: "University of Rwanda",
    location: "Kigali, Rwanda",
    description: "Graduated with First Class Honors. Specialized in software engineering and computer systems.",
    achievements: [
      "First Class Honors (GPA: 3.8/4.0)",
      "President of Computer Science Society",
      "Winner of National Programming Competition 2020",
      "Published research on mobile app security",
    ],
  },
  {
    period: "2020",
    title: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    location: "Online",
    description: "Professional certification in cloud architecture and AWS services.",
    achievements: [
      "Passed with 85% score",
      "Specialized in serverless architectures",
      "Expert in cloud security best practices",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A journey of continuous learning and growth in the ever-evolving world of technology. From junior developer
            to leading complex projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Professional Experience</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center relative z-10">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-card border-border">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="text-xl font-semibold text-foreground">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                            {exp.website && (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-pretty leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs bg-muted/50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Education & Certifications</h3>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-semibold text-foreground">{edu.title}</CardTitle>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Building className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty leading-relaxed">{edu.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Highlights:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
