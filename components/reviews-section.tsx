import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "/professional-woman-diverse.png",
    rating: 5,
    review:
      "Clement is an exceptional developer who consistently delivers high-quality solutions. His expertise in full-stack development and DevOps has been instrumental in scaling our platform to serve over 50,000 users.",
    project: "Enterprise Platform Development",
    date: "2024",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    avatar: "/professional-man.jpg",
    rating: 5,
    review:
      "Working with Clement was a game-changer for our fintech project. He not only delivered on time but also suggested improvements that reduced our infrastructure costs by 40%. His attention to detail is remarkable.",
    project: "Fintech Application",
    date: "2023",
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "EcoTrack",
    avatar: "/professional-woman-entrepreneur.png",
    rating: 5,
    review:
      "Clement built our entire sustainability platform from scratch. The result exceeded our expectations - clean code, excellent performance, and a user experience that our customers love. Highly recommended!",
    project: "Sustainability Platform",
    date: "2024",
  },
  {
    name: "David Uwimana",
    role: "CEO",
    company: "MobileTech Rwanda",
    avatar: "/african-businessman.png",
    rating: 5,
    review:
      "Clement led our mobile development team with exceptional skill. Under his leadership, we delivered 8 mobile apps with 4.5+ star ratings. His technical expertise and mentoring abilities are outstanding.",
    project: "Mobile App Development",
    date: "2023",
  },
  {
    name: "Lisa Thompson",
    role: "Healthcare Director",
    company: "MediConnect",
    avatar: "/healthcare-professional-woman.jpg",
    rating: 5,
    review:
      "The telemedicine platform Clement developed for us has been transformative. HIPAA compliant, secure, and user-friendly - exactly what we needed. His understanding of healthcare requirements was impressive.",
    project: "Telemedicine Platform",
    date: "2023",
  },
  {
    name: "James Mutabazi",
    role: "Agricultural Consultant",
    company: "AgriTech Solutions",
    avatar: "/african-agricultural-expert.jpg",
    rating: 5,
    review:
      "The IoT dashboard Clement created revolutionized how we monitor crops. Real-time data, predictive analytics, and a 30% yield improvement - the ROI speaks for itself. Exceptional work!",
    project: "IoT Agricultural System",
    date: "2023",
  },
]

const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "35+" },
  { label: "Years Experience", value: "4+" },
  { label: "Average Rating", value: "4.9/5" },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Client Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me on
            their projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary/5 border-primary/20 text-center">
              <CardContent className="pt-6 pb-6">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-primary/20" />
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-pretty leading-relaxed">"{review.review}"</p>

                {/* Project Badge */}
                <Badge variant="outline" className="text-xs bg-muted/50">
                  {review.project}
                </Badge>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-foreground text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {review.role} at {review.company}
                    </div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Join the list of satisfied clients who have transformed their ideas into successful digital solutions.
                Let's discuss your project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Start Your Project
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  View Portfolio
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
