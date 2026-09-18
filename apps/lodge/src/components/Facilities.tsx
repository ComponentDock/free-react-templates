import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const facilities = [
  {
    title: 'Wellness Center',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt consectetur turpis, eget consequat.',
    image: 'https://picsum.photos/seed/lodge-wellness/800/500',
  },
  {
    title: 'Fitness Center',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt consectetur turpis, eget consequat.',
    image: 'https://picsum.photos/seed/lodge-fitness/800/500',
  },
]

export function Facilities() {
  return (
    <section id="facilities" className="bg-lodge-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Facilities
        </h2>
        <div className="space-y-0">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className={cn(
                'grid items-stretch overflow-hidden rounded-lg bg-white shadow-md',
                'md:grid-cols-2',
                i % 2 === 1 && 'md:[&>:first-child]:order-2',
              )}
            >
              <img
                src={f.image}
                alt={f.title}
                className="h-64 w-full object-cover md:h-full"
                loading="lazy"
              />
              <div className="flex flex-col justify-center p-8">
                <h3
                  className="mb-3 text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {f.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-lodge-500">{f.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 self-start rounded bg-lodge-900 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-lodge-800"
                >
                  Visit Center
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
