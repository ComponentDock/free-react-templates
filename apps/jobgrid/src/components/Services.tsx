import { ArrowRight } from 'lucide-react'
import { Palette, Radio, UtensilsCrossed, Code2, Building2, Megaphone } from 'lucide-react'

const categories = [
  {
    icon: Palette,
    title: 'Design & creatives',
    description:
      'Explore opportunities in graphic design, UI/UX, branding, and creative direction.',
  },
  {
    icon: Radio,
    title: 'Telecommunication',
    description: 'Find roles in telecom engineering, network management, and wireless systems.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description: 'Browse culinary positions from chefs and servers to restaurant managers.',
  },
  {
    icon: Code2,
    title: 'Programming',
    description: 'Discover software engineering, web development, and DevOps opportunities.',
  },
  {
    icon: Building2,
    title: 'Architecture',
    description: 'Explore architecture, interior design, and urban planning positions.',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Find roles in digital marketing, SEO, content strategy, and brand management.',
  },
] as const

export function Services() {
  return (
    <section id="categories" className="bg-bg-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Browse from over <span className="text-brand">2000+</span> jobs
          </h2>
          <p className="mt-3 text-text-muted">
            Explore the most popular job categories available right now.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-dark">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{cat.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-blue"
                >
                  Browse Job
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
