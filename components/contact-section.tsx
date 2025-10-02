import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Clock, ChevronDown } from "lucide-react"

const PencilGithubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="hand-drawn"
  >
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PencilLinkedinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="hand-drawn"
  >
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PencilMailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="hand-drawn"
  >
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PencilTwitterIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="hand-drawn"
  >
    <path
      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have a project in mind? I'm always excited to discuss new opportunities and help bring your ideas to life
              with cutting-edge technology.
            </p>

            <div className="flex items-center justify-center gap-4 mx-auto mt-10">
              <a
                href="https://github.com/mugishaclement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors minimal-hover-border p-2 rounded-lg border-none hover:border-none"
                title="GitHub"
              >
                <PencilGithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/mugishaclement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors minimal-hover-border p-2 rounded-lg border-none hover:border-none"
                title="LinkedIn"
              >
                <PencilLinkedinIcon />
              </a>
              <a
                href="mailto:clement@example.com"
                className="text-muted-foreground hover:text-primary transition-colors minimal-hover-border p-2 rounded-lg border-none hover:border-none"
                title="Email"
              >
                <PencilMailIcon />
              </a>
              <a
                href="https://twitter.com/mugishaclement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors minimal-hover-border p-2 rounded-lg border-none hover:border-none"
                title="Twitter"
              >
                <PencilTwitterIcon />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="w-full max-w-md bg-card border-border shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-semibold text-foreground">Get in Touch</CardTitle>
              <p className="text-muted-foreground">You can reach us anytime</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="First name"
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  />
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">0/120</span>
                  </div>
                </div>

                <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90">
                  Submit
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By contacting us, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2025 MUGISHA Clement. Built with Next.js and Tailwind CSS.</p>
            <div className="flex items-center gap-4">
              <a
                href="/admin/login"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Admin Login
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="/admin/dashboard"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
