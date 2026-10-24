import { ExternalLink } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface CaseStudiesProps {
  className?: string
}

const cases = [
  { seed: 'uc-case-1', title: 'Business Finance Consulting' },
  { seed: 'uc-case-2', title: 'Business Finance Consulting' },
  { seed: 'uc-case-3', title: 'Business Finance Consulting' },
  { seed: 'uc-case-4', title: 'Business Finance Consulting' },
]

export function CaseStudies({ className }: CaseStudiesProps) {
  return (
    <section id="work" className={cn('py-16 sm:py-20', className)} aria-labelledby="cases-heading">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 id="cases-heading" className="text-2xl font-bold text-ink sm:text-3xl">
            We Take Every Case Studies Very Seriously
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <a key={c.seed} href="#" className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${c.seed}/400/300`}
                alt={c.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex items-center gap-2 text-white">
                  <h3 className="text-sm font-semibold">{c.title}</h3>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
