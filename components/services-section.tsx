import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, Database, Zap, Shield, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications using modern frameworks like React, Next.js, and Node.js. From concept to deployment with scalable architecture.",
    features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"],
    price: "Starting at $2,500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native and Flutter. Native performance with shared codebase efficiency.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Deployment", "Push Notifications"],
    price: "Starting at $3,500",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Solutions",
    description:
      "Complete CI/CD pipelines, cloud infrastructure setup, and deployment automation. Scale your applications with confidence.",
    features: ["AWS/GCP Setup", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Logging"],
    price: "Starting at $1,500",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Robust database design and optimization for high-performance applications. From SQL to NoSQL solutions.",
    features: ["Database Design", "Query Optimization", "Data Migration", "Backup Strategies"],
    price: "Starting at $1,200",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed up your existing applications with advanced optimization techniques. Better performance means better user experience.",
    features: ["Code Optimization", "Caching Strategies", "Load Balancing", "Performance Monitoring"],
    price: "Starting at $800",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description:
      "Comprehensive security assessments and implementation of best practices to protect your applications and data.",
    features: ["Security Assessment", "Vulnerability Testing", "Authentication Systems", "Data Protection"],
    price: "Starting at $1,000",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Services I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From initial concept to final deployment, I provide comprehensive development services tailored to your
            specific needs and business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground text-balance">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full group/btn bg-transparent">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-3xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution that
                perfectly fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#contact">Get Custom Quote</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">View Past Work</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
