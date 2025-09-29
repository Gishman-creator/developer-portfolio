import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillsData = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust", "C++"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "React Native", "Flutter", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "Django", "FastAPI", "Spring Boot", "GraphQL", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase", "Prisma"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Vercel", "GitHub Actions", "Terraform", "Jenkins"],
  },
  {
    category: "Mobile",
    skills: ["React Native", "Flutter", "Expo", "iOS Development", "Android Development"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance font-display">
            My Skills & Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit built through years of hands-on experience in full-stack development, mobile
            applications, and cloud infrastructure.
          </p>
        </div>

        <Card className="bg-card border-border hover:border-primary/20 transition-colors">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground text-center font-display">
              Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillsData.map((skillGroup, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 ml-5">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-muted hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
