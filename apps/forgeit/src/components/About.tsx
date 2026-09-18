import { Smartphone, Lightbulb } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function AboutFeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-brand">{icon}</span>
        <h3 className="text-lg font-bold text-dark">{title}</h3>
      </div>
      <p className="text-sm text-body">{description}</p>
      <a href="#" className="mt-2 text-sm font-medium text-brand hover:underline">
        Learn More
      </a>
    </div>
  )
}

export function About() {
  return (
    <section id="about-section" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src="https://picsum.photos/seed/forgeit-about2/600/500"
              alt="About our agency"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="section-heading mb-6 text-left md:text-left">About Us</h2>
            <p className="mb-8 text-body">
              We are a creative agency passionate about building digital experiences that make a
              difference. Our team combines strategy, design, and technology to help brands grow and
              succeed in the digital landscape.
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <AboutFeatureCard
                icon={<Smartphone size={28} />}
                title="Web & Mobile Specialties"
                description="Expertise across web and mobile platforms for seamless user experiences."
              />
              <AboutFeatureCard
                icon={<Lightbulb size={28} />}
                title="Intuitive Thinkers"
                description="Creative problem-solving that turns complex challenges into elegant solutions."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
