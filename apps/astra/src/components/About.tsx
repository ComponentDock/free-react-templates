import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

const processCards = [
  {
    title: 'Planning',
    description:
      'We start by understanding your goals, audience, and market position to create a strategic roadmap.',
  },
  {
    title: 'Branding',
    description:
      'Crafting a unique visual identity that resonates with your target market and stands out from competition.',
  },
  {
    title: 'Implementation',
    description:
      'Bringing the brand strategy to life across all touchpoints — digital, print, and environmental.',
  },
  {
    title: 'Documentation',
    description:
      'Comprehensive brand guidelines ensuring consistency across every channel and future campaign.',
  },
]

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-24', className)}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-primary-400">
            01 Who We Are
          </p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-ink md:text-4xl">
            We are a branding agency that creates inspiring digital experiences
          </h2>
          <p className="font-sans text-base leading-relaxed text-smoke">
            With over 10 years of experience, we have helped hundreds of brands transform their
            identity and connect with their audience in meaningful ways. Our team of creative
            professionals combines strategy, design, and technology to build brands that last.
          </p>
        </div>

        {/* Process cards grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {processCards.map((card) => (
            <div
              key={card.title}
              className="rounded-sm border-t-4 border-accent-400 bg-mist p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-3 font-serif text-xl font-bold text-ink">{card.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-smoke">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
