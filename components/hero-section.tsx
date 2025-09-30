import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

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

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-evenly gap-12 lg:gap-16">
          {/* Profile Section - Left on desktop, top on mobile */}
          <div className="flex-shrink-0 text-center lg:text-left">
            {/* Avatar */}
            <div className="mb-6">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <Image
                  src="/logo.png"
                  alt="MUGISHA Clement"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 font-display">MUGISHA Clement</h2>
              <p className="text-lg text-primary font-semibold mb-4">Software Developer</p>

              <div className="flex items-center justify-center lg:justify-start gap-4">
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
          </div>

          {/* Content Section - Right on desktop */}
          <div className="flex-1 text-center lg:text-left lg:max-w-2xl bg-red-50">

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance font-display">
              I build <span className="text-primary">full-stack solutions</span> that actually work!
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              Code, bugs, and late-night coffee keep it all running. I turn complex problems into clean, working
              solutions across web, mobile, and cloud infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                asChild
                className="minimal-hover border-2 border-primary bg-primary text-primary-foreground"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
