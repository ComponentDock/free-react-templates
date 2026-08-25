import { Briefcase, Search, TrendingUp, Users } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface AboutOverviewProps {
  className?: string
}

const features = [
  {
    icon: Users,
    title: 'Professional Consultants',
    desc: 'Our team of seasoned financial consultants brings decades of experience to guide your decisions.',
  },
  {
    icon: Search,
    title: 'Comprehensive Services',
    desc: 'End-to-end financial services covering planning, investments, tax, insurance, and more.',
  },
  {
    icon: TrendingUp,
    title: 'A Culture that Delivers',
    desc: 'We are committed to delivering results that exceed expectations every single time.',
  },
  {
    icon: Briefcase,
    title: 'Industry Experience',
    desc: 'Over 20 years of experience working across diverse industries and financial landscapes.',
  },
]

export function AboutOverview({ className }: AboutOverviewProps) {
  return (
    <section className={cn('py-16 sm:py-20', className)} aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — heading + description */}
          <div className="flex flex-col justify-center">
            <span className="mb-2 text-sm font-semibold uppercase text-primary-400">
              About Union Corporation
            </span>
            <h2 id="about-heading" className="mb-4 text-2xl font-bold text-ink sm:text-3xl">
              More than 40M+ Trusted Our Financial &amp; Consultation Institution
            </h2>
            <p className="mb-4 text-smoke">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-6 text-smoke">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <a
              href="#services"
              className="inline-block w-fit rounded-lg bg-primary-400 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Right — 2×2 feature grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 rounded-lg border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-400">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-ink">{f.title}</h3>
                <p className="text-xs leading-relaxed text-smoke">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
